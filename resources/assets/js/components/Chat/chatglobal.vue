
<template>
<div v-if = "!offFunction">


  <q-page padding class="row justify-center"  v-if = "friendLatestMessage.length > 0" >
      <audio   class = "hidden" ref="player"  :src="audiofile"></audio>
      <div style="width: 500px; max-width: 90vw; margin-top: 50px; " >











          <transition
         appear
         enter-active-class="animated fadeIn"
         leave-active-class="animated fadeOut"
       >

       <div v-show="showSimulatedReturnData">

         <q-card inset inline  style="width: 100%; height: 85vh;">

          <q-item>
        <q-item-side :avatar="`images/${currentUserAvatar}`"  />
        <q-item-main>
          <q-item-tile label>{{currentUserName}}</q-item-tile>
          <q-item-tile sublabel>
            <span>Hi,  {{currentUserName}}</span>
          </q-item-tile>
        </q-item-main>

  <q-uploader


               class="hidden"
               ref="avatarUploader"
               url="api/uploadAvatar"
               :headers="{'Authorization': 'Bearer '+ token}"
               @uploaded="avatarUpload"
               @add="avatarAdded"
               @finish = "avatarUploadFinish"





               name = "avatarImage"
               extensions = ".jpeg, .png, .jpg"

               method="POST"
             ></q-uploader>

        <q-item-side right>
                <q-btn flat round dense icon="more_vert" text-color="	#F0F8FF">
                  <q-popover>
                    <q-list link>
                      <q-item v-close-overlay >
                        <q-item-main label="Change Picture" @click.native = "uploadAvatar"/>
                      </q-item>

                    </q-list>
                  </q-popover>
                </q-btn>
              </q-item-side>
      </q-item>



                 <q-list-header>Recent chats</q-list-header>

                    <q-scroll-area  class = "" style=" height: calc(-130px + 87vh); margin-top: 5px; " >

                 <template v-for="(user, index) in friendLatestMessage" >

            <q-item  @click.native="selectFriend(user.id, user.chatroute, user, index)">
              <q-item-side :avatar="`images/${user.avatar}`" />
              <q-item-main>
                <q-item-tile label lines="1">{{user.en_name}}</q-item-tile>

                <q-item-tile sublabel lines="2">{{user.latestmessage}}

                </q-item-tile>


              </q-item-main>

              <q-item-side right>
          <q-item-tile v-if = "user.latestmessage!=='You are now connected to chat'" stamp>{{messageDate(user)}}</q-item-tile>
        <q-item-tile right icon="check_circle" :color="user.isActive ? 'green' : 'gray'" />
      </q-item-side>
            </q-item>














          </template>
            </q-scroll-area>



          </q-card>

  </div>
</transition>
<q-inner-loading :visible="visible">
            <q-spinner color="primary" :size="36" style="margin-left: 1rem;" />
         </q-inner-loading>


   </div>
      </q-page>

</div>

<div v-else>




  <q-page class="chat-page" >

    <transition
   appear
   enter-active-class="animated fadeIn"
   leave-active-class="animated fadeOut"
  >


  <div v-show="showMessageSimulatedReturnData">



  <audio   class = "hidden" ref="player"  :src="audiofile"></audio>


      <q-scroll-area   id ="chatScroll" ref="myScroll" class = "q-px-xl" style="width: 100vw; height: calc(-130px + 100vh); margin-top: 50px">
          <div ref="scrollInner">
        <template  v-for="(item, index) in myMessages">

          <q-chat-message
                 :name="item.name"
                 :avatar="currentUserId == item.name ?  `images/${currentUserAvatar}` : `images/${item.avatar}`"
		 :label="item.label"
                 :stamp="stampDate(item)"
                 :sent="currentUserName == item.name ? true : false"
>               <div v-if="item.type === 'image'">
               <img class="responsive" :src="`./images/${item.message}`">
             </div>
             <div v-else-if="item.type === 'message'">
               <span> {{item.message}}</span>
             </div>

             <div  v-else-if="item.type === 'audio'" class="q-video">
               <div class="q-video">
    <iframe
      width="853"
      height="480"
      :src="`./audios/${item.message}?autoPlay=false`"
      frameborder="0"
      allowfullscreen
        autoPlay=false
          data-autoplay="false"




    ></iframe>

</div>


  </div>


  <div  v-else-if="item.type === 'video'" class="q-video">
     <div class="q-video">
<iframe
width="853"
height="480"
:src="`./videos/${item.message}?autoStart=0`"
frameborder="0"
allowfullscreen


></iframe>
</div>
</div>

             </q-chat-message>



</template>

  <template v-for="(ourFriend, index) in friendTyping" v-if = "ourFriend.isTyping">
<q-chat-message
       :name="ourFriend.name"
       :avatar="`images/${ourFriend.avatar}`"
     >
       <q-spinner-dots  color="#fff" size="2rem" />
     </q-chat-message>

   </template>

<q-scroll-observable   @scroll="scrollHandler" />
</div>
      </q-scroll-area>





    </div>

    </transition>

    <q-inner-loading :visible="messageVisible">
                <q-spinner color="primary" :size="36" style="margin-left: 1rem;" />
             </q-inner-loading>

    </q-page>

   <q-input
        color="dark"
        type="textarea"
        ref="message"
        class="row col-12 fixed-bottom full-width chat-message bg-white"
       style="z-index: 1001; margin-top: 16px; overflow: auto;
         overflow-x: hidden;"
         :max-height="100"

        v-model="message"
        @change="val => { message = val }"
        float-label="What's your message?"


        @keyup.enter="sendMessage()"
        :after="[
          { icon: 'send', handler() { sendMessage() } }
        ]"
     >



     <q-field v-if = "myFiles.length > 0"  v-for = "(files, index) in myFiles" :key = "files">
    <q-chip  closable color="light"> <img id="blah" src="#" alt="your image" /> </q-chip>

</q-chip>

</q-field>

   </q-input>

     


</div>

  </template>
  <script>

  import Vue from 'vue'
  import axios from 'axios'
  import {mapGetters} from 'vuex'
  import moment from 'moment'


import { scroll } from "quasar-framework/dist/quasar.mat.esm.js";

  import _ from 'lodash'





  export default{


  data(){
    return {

      mediaList: [
           {id: 1, name: "lover", src: "https://placeimg.com/200/200/animals"},
     {id: 2, name: "fdfdfdfdfd", src: "https://placeimg.com/200/200/arch"},
     {id: 3, name: "fdfdfdfd", src: "https://placeimg.com/200/200/nature"},
     {id: 1, name: "lover", src: "https://placeimg.com/200/200/animals"},
  {id: 2, name: "fdfdfdfdfd", src: "https://placeimg.com/200/200/arch"},
  {id: 3, name: "fdfdfdfd", src: "https://placeimg.com/200/200/nature"},
  {id: 1, name: "lover", src: "https://placeimg.com/200/200/animals"},
  {id: 2, name: "fdfdfdfdfd", src: "https://placeimg.com/200/200/arch"},
  {id: 3, name: "fdfdfdfd", src: "https://placeimg.com/200/200/nature"},
  {id: 1, name: "lover", src: "https://placeimg.com/200/200/animals"},
  {id: 2, name: "fdfdfdfdfd", src: "https://placeimg.com/200/200/arch"},
  {id: 3, name: "fdfdfdfd", src: "https://placeimg.com/200/200/nature"},


   ],



   visible: false,
     showSimulatedReturnData: false,

     messageVisible: false,
     showMessageSimulatedReturnData: false,


   isTyping: false,
   isUpated: false,
   friendTyping: [],
   currentUserAvatar: '',

   autoPlay: '?autoPlay=false',




   myFriendTypingName: '',
   myFriendTypingAvatar: '',
   myFriendTypingStatus: false,




   area: '',

   friendLatestMessage: [],

     lazy: 'Lazy update - on blur',

   tempFile: '',

   query: '',

       max: 5,
       footer: '',
       url: '',
       chips: ['<img class=\'responsive\' src=\'https://picsum.photos/400/250\' />'],

       myFiles: [],

       lamar: '<img class=\'responsive\' src=\'./images/1532591147.jpg\' />',






         Active: true,

         data: [],
           busy: false,

         items: [
                  { header: 'Today' },
                  { avatar: 'https://scontent.ficn2-1.fna.fbcdn.net/v/t1.0-1/p160x160/29468236_901369833374211_8734349036217171968_n.jpg?_nc_cat=0&oh=f8f7428a3e9e807d58b3ef91ef215062&oe=5B760837', title: 'Brunch this weekend?', subtitle: "  I'll be in your neighborhood doing errands this weekend. Do you want to hang out?", name: '' },
                  { divider: true, inset: true },

                ],





                users: [
                { active: true, title: 'Priscilla', avatar: 'https://scontent.ficn2-1.fna.fbcdn.net/v/t1.0-9/26734343_1963222710598716_4444436793604184869_n.jpg?_nc_cat=0&oh=7d16dfb49268afd4c548d37a9f4a6f77&oe=5B373C24' },
                { active: true, title: 'Ranee Carlson', avatar: '/static/doc-images/lists/2.jpg' },
                { title: 'Cindy Baker', avatar: '/static/doc-images/lists/3.jpg' },
                { title: 'Ali Connors', avatar: '/static/doc-images/lists/4.jpg' },
                { active: true, title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
                { active: true, title: 'Ranee Carlson', avatar: '/static/doc-images/lists/2.jpg' },
                { title: 'Cindy Baker', avatar: '/static/doc-images/lists/3.jpg' },
                { title: 'Ali Connors', avatar: '/static/doc-images/lists/4.jpg' },
                { active: true, title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
                { active: true, title: 'Ranee Carlson', avatar: '/static/doc-images/lists/2.jpg' },
                { title: 'Cindy Baker', avatar: '/static/doc-images/lists/3.jpg' },
                { title: 'Ali Connors', avatar: '/static/doc-images/lists/4.jpg' },
                { active: true, title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
                { active: true, title: 'Ranee Carlson', avatar: '/static/doc-images/lists/2.jpg' },
                { title: 'Cindy Baker', avatar: '/static/doc-images/lists/3.jpg' },
                { title: 'Ali Connors', avatar: '/static/doc-images/lists/4.jpg' }
              ],
              users2: [
                { title: 'Travis Howard', avatar: '/static/doc-images/lists/5.jpg' }
              ],

              message: '',


               myMessages:{


                 messages: [

                   { header: 'Today' },
                   { avatar: 'https://scontent.ficn2-1.fna.fbcdn.net/v/t1.0-1/p160x160/29468236_901369833374211_8734349036217171968_n.jpg?_nc_cat=0&oh=f8f7428a3e9e807d58b3ef91ef215062&oe=5B760837', title: 'Brunch this weekend?', subtitle: "  I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
                   { divider: true, inset: true }

                 ]
               },







               myFriends:[],

               audiofile: './images/message_tone.mp3',



               myLatestMessage: [],

               currentUser: '',
               secondUser: '',
               tempMessage: '',
               messageStorage: [],

               messageValue: 0,
               tempName: '',
               currentUserName: '',
               secondUserName: '',
               currentUserId : '',
               currentUserRole: '',
               initializeMessage: -20,
               isActive: true,
               file: undefined,
               audio: undefined,
               scrollValue: 20,
               max: false,

               offFunction: false,
               tempArray: [],

               type: 'image',

	       currentSocketId: ''


       }

       },

       computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters([
        'isLogged'

        // ...
      ]),

      token () {
        return localStorage.getItem('token')
      },
      friendListsFilter: function(){

                var vm = this

               return vm.searchFor(vm.friendLatestMessage, vm.query, 'en_name')
             }

    },

       watch:{

         message(val){
            var vm = this


            if(val.trim()){

                vm.isTyping = true

                vm.inputUpdate()
            }

            else{

              vm.isTyping = false

                vm.inputUpdate()
            }


         },

   currentSocketId(val){


           var vm = this

           if(val){


                          vm.$socket.disconnect()
                          vm.$socket.connect()
                          vm.currentSocketId =   vm.$socket.id





           }

           else{
             vm.currentSocketId = vm.$socket.id

           }
         },


         currentUserAvatar(newval, oldval){
           var vm = this








         }





       },







       mounted(){




       var vm = this




       vm.$socket.on('myTypingStatus', function(data){



          var tempArray = []

          Vue.set(vm.$data, 'friendTyping', tempArray)

          tempArray.push({'avatar' : data.currentUserAvatar, 'name': vm.secondUserName,  'isTyping': data.isTyping})

          Vue.set(vm.$data, 'friendTyping', tempArray)
              vm.initializeScrollArea()



       })


         vm.$socket.on('sendMessage', function(data){

            var currentUserName = vm.secondUserName


              if(vm.currentUserId === data.senderId){

              currentUserName = data.currentUser
              }


           if(vm.offFunction === true ){


             if(vm.secondUser === data.senderId  || vm.currentUserId === data.senderId){








         vm.myMessages.push({'avatar' : data.currentUserAvatar, 'name': currentUserName, 'message': data.message, 'type': data.messageType})
       var myData = data.messagedata
       var connected = false
       var messageCount = 0;



           connected = true
         axios.put(`/api/editMessage/${myData}`).then(function(response){


            vm.initializeScrollArea()



                if(vm.currentUserId !== data.senderId){



               vm.$refs.player.play()

}


         }).catch(function(error){

           console.log(error)
         })



}
}



         }.bind(this))

         vm.$socket.on('messageNotification', function(data){










       var vm = this

       if(vm.currentUserName === data.myunread.currentUserName){

      data.myunread.currentUserName = data.myunread.friend.en_name



    }


       if(data.myunread.messageType !== 'message'){

         data.myunread.message = data.myunread.currentUserName + ' has sent a ' + data.myunread.messageType

       }



            let nameToFindIndex = vm.friendLatestMessage.findIndex(p => p.en_name === data.myunread.currentUserName)


            Vue.set(vm.friendLatestMessage[nameToFindIndex], 'latestmessage', data.myunread.message)
            Vue.set(vm.friendLatestMessage[nameToFindIndex], 'created_at', data.myunread.messageDate.date)


        let nameToChangeAndSwap = vm.friendLatestMessage.find(p => p.en_name === data.myunread.currentUserName)
       let originalIndex = vm.friendLatestMessage.findIndex(p => p.en_name === data.myunread.currentUserName)

       vm.friendLatestMessage.splice(originalIndex, 1)
       vm.friendLatestMessage.unshift({
         ...nameToChangeAndSwap,
         name: data.myunread.currentUserName
       })




if(vm.currentUserId !== data.myunread.myId){


  vm.$refs.player.play()

}


         }.bind(this))

         vm.$socket.on('yourFriend', function(data){

           let myFriend = data



       if(data !=null){

           for(var i =0; i<vm.friendLatestMessage.length; i++){





             if (vm.friendLatestMessage[i]['id'] === myFriend){



                 Vue.set( vm.friendLatestMessage[i], 'isActive', true)


             }






           }

         }











         }.bind(this))



       vm.$socket.on('Now', function(data){


         if(vm.isLogged){




        if(data.currentUserId!= vm.currentUserId){




           let nameToFindIndex = vm.friendLatestMessage.findIndex(p => p.id === data.currentUserId)






                      Vue.set(vm.friendLatestMessage[nameToFindIndex], 'isActive', true)


}






         }

       }.bind(this))





       vm.$socket.on('userDisconnected', function(data){



         if(vm.isLogged){




        if(data.currentUserId!= vm.currentUserId){




             for(var i =0; i<vm.friendLatestMessage.length; i++){





               if (vm.friendLatestMessage[i]['id'] === parseInt(data.currentUserId)){



                   Vue.set( vm.friendLatestMessage[i], 'isActive', false)


               }



       }





















}

}




       }.bind(this))



       },





       beforeMount(){
       var vm = this







      this.friendLists()

       this.showTextLoading()


       this.showMessageTextLoading()


       },


       methods:{


       getTestData(){

       axios.get('api/testData').then(function(response){



       }).catch(function(error){


         console.log(error)
       })

       },

       showTextLoading () {

          var vm = this
     vm.show()
   },


   messageDate (message) {
       let myDate = moment(message.created_at).format('dddd')


     let today  = moment(new Date()).format('dddd');



let yesterday = moment(new Date()).add(-1, 'days').format('dddd');


if( myDate === today){

  return 'Today';


}

else if(myDate === yesterday){

  return 'Yesterday';

}

else{



       return myDate;
}
   },



 stampDate(message){

     let myDate = moment(message.created_at).format('LT')

     return myDate

   },

labelUnique(){

var vm = this



let holder = []

const filteredObject = _.pickBy(vm.myMessages, property => {
  if(holder.indexOf(moment(property.created_at).format('dddd, MMM Do YY')) === -1) {
      holder.push(moment(property.created_at).format('dddd, MMM Do YY'))
      return true
  }
  return false
})

for(var i=0; i<holder.length; i++){

  let nameToFindIndex = vm.myMessages.findIndex(p => (moment(p.created_at).format('dddd, MMM Do YY') === holder[i]))
     Vue.set(vm.myMessages[nameToFindIndex],'label', holder[i])
}







},


   show () {

      var vm = this
      this.visible = true
      this.showSimulatedReturnData = false
        if(vm.friendLatestMessage.length !== null){

          setTimeout(()=>{



        this.visible = false
        this.showSimulatedReturnData = true
      },500)
      }

    },


    showMessageTextLoading(){

      var vm = this
      vm.messageShow()
    },


    messageShow(){
      var vm = this
      this.messageVisible = true
      this.showMessageSimulatedReturnData = false
        if(vm.myMessages.length !== null){

          setTimeout(()=>{



          this.messageVisible = false
        this.showMessageSimulatedReturnData = true
      },500)
      }

    },



       uploadAvatar(){


         var vm = this

         vm.$refs.avatarUploader.pick()


       },

       avatarUpload(files, xhr){
 var vm = this
         let response = JSON.parse(xhr.response)



         vm.myNewAvatar = response


       },

       avatarAdded(files){

         var vm  = this

         vm.$refs.avatarUploader.upload()

       },

       avatarUploadFinish(){

         var vm = this








                Vue.set(vm.$data, 'currentUserAvatar', vm.myNewAvatar)











       },


       test(){


       },


       inputUpdate(){
var vm = this
         if(vm.isTyping && !vm.isUpated){


           vm.$socket.emit('typingStatus', { friend: vm.getUserSock, bonusdata: vm.$socket.id, secondUser: vm.secondUser, myId: vm.currentUserId, currentUserName: vm.currentUserName, isTyping: vm.isTyping, currentUserAvatar: vm.currentUserAvatar})

           vm.isUpated = true
         }

         if(!vm.isTyping && vm.isUpated){


            vm.$socket.emit('typingStatus', { friend: vm.getUserSock, bonusdata: vm.$socket.id, secondUser: vm.secondUser, myId: vm.currentUserId, currentUserName: vm.currentUserName, isTyping: vm.isTyping, currentUserAvatar: vm.currentUserAvatar})
           vm.isUpated = false
         }

       },

       onUpload(file, xhr){

          var vm  = this

           let response = JSON.parse(xhr.response)

           vm.tempFile = response.image



           vm.myMessages.push({'avatar' : vm.currentUserAvatar, 'name': vm.currentUserName, 'message': vm.tempFile, 'type': response.messageType})

           vm.$socket.emit('latestMessage', {message: vm.tempFile, friend: vm.getUserSock, messagedata: response.id, bonusdata: vm.$socket.id, secondUser: vm.secondUser, myId: vm.currentUserId, currentUserName: vm.currentUserName, messageType: response.messageType, currentUserAvatar: vm.currentUserAvatar, messageDate: response.messageDate, myId: vm.currentUserId})

             vm.initializeScrollArea()



       },

       added(files){

        var vm  = this

               vm.$refs.uploader.upload();



       },

       uploadFinish(){

         var vm = this


       },





       scrollHandler(myScroll){

 var vm = this
         if(myScroll.position === 0 && vm.max === false){


           vm.myFriend = new FormData();


           vm.myFriend.append('secondUser', vm.secondUser)
           vm.myFriend.append('scrollValue', vm.scrollValue)

           axios.post('/api/getMessages', vm.myFriend).then(function(response){


           vm.max = response.data.max






           Vue.set(vm.$data, 'myMessages', response.data.messages)


           vm.scrollValue+=20
           vm.currentUserName = response.data.currentUserName
           vm.secondUserName = response.data.secondUserName

	   vm.labelUnique()


           }).catch(function(error){

             console.log(error)
           })




         }










       },

       initializeScrollArea(){



         var vm = this




         setTimeout(() => {
       	vm.$refs.myScroll.setScrollPosition(vm.$refs.scrollInner.scrollHeight, 150)
       }, 250)




},

       upload() {

         var vm = this
       vm.$refs.uploader.pick()


         var mySocketId = vm.$socket.id
        var currentUserId = vm.currentUserId
        var secondUserId = vm.secondUser
        var getUserSock = vm.getUserSock
	var current_conn_id = vm.getUserSock['current_conn_id']
	var previous_conn_id = vm.getUserSock['previous_conn_id']
        app.performFileSearch(mySocketId, currentUserId, secondUserId, current_conn_id, previous_conn_id);


      },




       searchFor: function (list, value, column) {
             return list.filter(function (item) {
               return item[column].includes(value)
             })
           },


       initScroll(){
       var vm = this

       var container = vm.$el.querySelector('.chat-page ')
       container.addEventListener("scroll", ()=>{

       if(container.scrollTop === 0 && vm.max === false){


         vm.myFriend = new FormData();


         vm.myFriend.append('secondUser', vm.secondUser)
         vm.myFriend.append('scrollValue', vm.scrollValue)

         axios.post('/api/getMessages', vm.myFriend).then(function(response){


         vm.max = response.data.max






         Vue.set(vm.$data, 'myMessages', response.data.messages)


         vm.scrollValue+=20
         vm.currentUserName = response.data.currentUserName
         vm.secondUserName = response.data.secondUserName




         }).catch(function(error){

           console.log(error)
         })




       }





       })


     },














       sendMessage(){


       var vm  = this

	if(vm.message.trim()){

       const last = vm.message

       var spaceCount = (vm.message.split(" ").length - 1);





       vm.tempMessage = vm.message








         vm.formData = new FormData();


         vm.formData.append('secondUser', vm.secondUser)
         vm.formData.append('message', vm.tempMessage)

         axios.post('api/saveMessage', vm.formData).then(function(response){
	
	if(vm.message.trim()){
       vm.myMessages.push({'avatar' : vm.currentUserAvatar, 'name': vm.currentUserName, 'message': vm.message, 'type': 'message'})		

       vm.$socket.emit('latestMessage', {message: vm.message, friend: vm.getUserSock, messagedata: response.data.id, bonusdata: vm.$socket.id, secondUser: vm.secondUser, myId: vm.currentUserId, currentUserName: vm.currentUserName, messageType: response.data.messageType, currentUserAvatar: vm.currentUserAvatar, messageDate: response.data.messageDate, type: response.data.messageType})


       vm.message = ''
}

         }).catch(function(error){

           console.log(error)
         })





          vm.initializeScrollArea()

}
       },



       scrollToEnd () {
         var vm = this
               var container = vm.$el.querySelector('.chat-page ')
               container.scrollTop = container.scrollHeight


             },

             loadMore: function() {
             this.busy = true;

             setTimeout(() => {
               for (var i = 0, j = 10; i < j; i++) {
                 this.data.push({ name: count++ });
               }
               this.busy = false;
             }, 1000);
           },







         async friendLists(){



       var vm = this










            await axios.get('api/getFriendLists').then(function(response){



	var mysocketid  = vm.$socket.id


if(mysocketid === undefined || mysocketid === null  ){

location.reload()
}

              vm.currentUserAvatar = response.data.currentUserAvatar
              vm.currentUserName = response.data.currentName

              Vue.set(vm.$data, 'friendLatestMessage', response.data.friendLatestMessage)





       vm.currentUserId = response.data.currentUserId
       vm.currentUserRole = response.data.role

       vm.messageFriend =  response.data.currentUser
            vm.$socket.emit('ImOn', {currentUserId: vm.currentUserId, mySocket: mysocketid, friend: response.data.currentUser})



            setInterval(function(){

                  vm.$socket.emit('friendOnline', vm.currentUserId)
                  }, 2000);




             }).catch(function(error){

               console.log(error)
             })



           },

            getUnreadMessages(){

             var vm = this

              axios.get('api/getUnreadMessages').then(function(response){
               let unreadMessages = response.data.allUnread


               for(var i =0; i<vm.friendLatestMessage.length; i++){
                 Vue.set(vm.friendLatestMessage[i],'notif',unreadMessages[i+1])

               }



             }).catch(function(error){

               console.log(error)
             })

           },


           selectFriend(id, chatroute, item, index){

       var vm = this



       vm.max = false
       vm.scrollValue = 20
       vm.offFunction = true
       vm.$router.push('/chatglobal/' + chatroute)



       vm.secondUser = id
       vm.getUserSock = item

       let currentUserId = vm.currentUserId
       let role = vm.currentUserRole



       vm.myFriend = new FormData();


       vm.myFriend.append('secondUser', id)
       vm.myFriend.append('scrollValue', vm.scrollValue)



       axios.post('/api/getMessages', vm.myFriend).then(function(response){



       vm.max = response.data.max

       Vue.set(vm.$data, 'myMessages', response.data.messages)

    vm.labelUnique()

       vm.scrollValue+=20
       vm.currentUserName = response.data.currentUserName
       vm.secondUserName = response.data.secondUserName



       if(vm.myMessages){

         vm.initializeScrollArea()

       Vue.set(vm.friendLatestMessage[index], 'notif', 0)



       }

       }).catch(function(error){

         console.log(error)
       })








     }

   }
  }




  </script>

  <style>

  body {



  overflow-y: hidden;




}

.chat-page {
  overflow: auto;
  overflow-x: hidden;
}

.chat-message .q-icon {
  margin-right: 10px;
  min-height: 75px;
}


::-webkit-scrollbar {
    display: none;


}

#chatScroll{

  overflow: auto;
  overflow-x: hidden;
}

.responsive{



}


  </style>
