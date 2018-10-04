import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
/*import App from './App.vue'*/
import SignIn from './components/SignIn'
import SignUpView from './components/SignUpView'
import HomeUser from './components/HomeUser'
import HomeUserPersonalInfo from './components/HomeUserPersonalInfo'
import newhome from './components/newhome'
import BookLists from './components/BookLists'
import BooksAnalysis from './components/JkolsBooks/Introductions/BooksAnalysis'
import BooksMeetings from './components/JkolsBooks/Introductions/BooksMeetings'
import BooksIntroduction from './components/JkolsBooks/Introductions/BooksIntroduction'
import BooksMain from './components/JkolsBooks/Introductions/BooksMain'
import BooksJournal from './components/JkolsBooks/Introductions/BooksJournal'
import BooksU1OpeningAMeeting from './components/JkolsBooks/Unit1/BooksU1OpeningAMeeting'
import BooksU1WelcomingParticipants from './components/JkolsBooks/Unit1/BooksU1WelcomingParticipants'
import BooksU1Practice from './components/JkolsBooks/Unit1/BooksU1Practice'
import BooksU1Chairing from './components/JkolsBooks/Unit1/BooksU1Chairing'
import BooksU1StudySuggestion from './components/JkolsBooks/Unit1/BooksU1StudySuggestion'
import BooksU2PresentingInformation from './components/JkolsBooks/Unit2/BooksU2PresentingInformation'
import BooksU2Stating from './components/JkolsBooks/Unit2/BooksU2Stating'
import BooksU2Practice from './components/JkolsBooks/Unit2/BooksU2Practice'
import BooksU2Consolidation from './components/JkolsBooks/Unit2/BooksU2Consolidation'
import BooksU2Reference from './components/JkolsBooks/Unit2/BooksU2Reference'
import BooksU2Review from './components/JkolsBooks/Unit2/BooksU2Review'
import BooksU3ProblemSolving from './components/JkolsBooks/Unit3/BooksU3ProblemSolving'
import BooksU3Presentation from './components/JkolsBooks/Unit3/BooksU3Presentation'
import BooksU3Practice from './components/JkolsBooks/Unit3/BooksU3Practice'
import BooksU3Consolidation from './components/JkolsBooks/Unit3/BooksU3Consolidation'
import BooksU3Reference from './components/JkolsBooks/Unit3/BooksU3Reference'
import BooksU4Explaining from './components/JkolsBooks/Unit4/BooksU4Explaining'
import BooksU4Presentation from './components/JkolsBooks/Unit4/BooksU4Presentation'
import BooksU4Practice from './components/JkolsBooks/Unit4/BooksU4Practice'
import BooksU4Consolidation from './components/JkolsBooks/Unit4/BooksU4Consolidation'
import BooksU4Reference from './components/JkolsBooks/Unit4/BooksU4Reference'
import BooksU5AgreeingAndDisagreeing from './components/JkolsBooks/Unit5/BooksU5AgreeingAndDisagreeing'
import BooksU5Presentation from './components/JkolsBooks/Unit5/BooksU5Presentation'
import BooksU5Practice from './components/JkolsBooks/Unit5/BooksU5Practice'
import BooksU5Reference from './components/JkolsBooks/Unit5/BooksU5Reference'
import BooksU6SummarizeAndClosing from './components/JkolsBooks/Unit6/BooksU6SummarizeAndClosing'
import BooksU6Presentation from './components/JkolsBooks/Unit6/BooksU6Presentation'
import BooksU6Practice from './components/JkolsBooks/Unit6/BooksU6Practice'
import BooksU6Reference from './components/JkolsBooks/Unit6/BooksU6Reference'
import Contents from './components/Freetalking/Contents'
import IntroducingOnesSelf from './components/Freetalking/Lesson1/IntroducingOnesSelf'
import SetB from './components/Freetalking/Lesson1/SetB'
import Lesson1Grammar from './components/Freetalking/Lesson1/Lesson1Grammar'
import Lesson2Travelling from './components/Freetalking/Lesson2/Lesson2Travelling'
import Lesson2Vocabulary from './components/Freetalking/Lesson2/Lesson2Vocabulary'
import Lesson2Samples from './components/Freetalking/Lesson2/Lesson2Samples'
import Lesson3Colors from './components/Freetalking/Lesson3/Lesson3Colors'
import Lesson3Vocabulary from './components/Freetalking/Lesson3/Lesson3Vocabulary'
import Lesson3Samples from './components/Freetalking/Lesson3/Lesson3Samples'
import Lesson4Memories from './components/Freetalking/Lesson4/Lesson4Memories'
import Lesson4Grammar from './components/Freetalking/Lesson4/Lesson4Grammar'
import Lesson4Vocabulary from './components/Freetalking/Lesson4/Lesson4Vocabulary'
import Lesson5Music from './components/Freetalking/Lesson5/Lesson5Music'
import Lesson5Grammar from './components/Freetalking/Lesson5/Lesson5Grammar'
import Lesson5Vocabulary from './components/Freetalking/Lesson5/Lesson5Vocabulary'
import Lesson6Food from './components/Freetalking/Lesson6/Lesson6Food'
import Lesson6Samples from './components/Freetalking/Lesson6/Lesson6Samples'
import Lesson6Vocabulary from './components/Freetalking/Lesson6/Lesson6Vocabulary'
/*import Lesson7FamilyMembers from './components/Freetalking/Lesson7/Lesson7FamilyMembers'
import Lesson7Samples from './components/Freetalking/Lesson7/Lesson7Samples'
import Lesson7Vocabulary from './components/Freetalking/Lesson7/Lesson7Vocabulary'*/
import Lesson8Friendship from './components/Freetalking/Lesson8/Lesson8Friendship'
import Lesson8Samples from './components/Freetalking/Lesson8/Lesson8Samples'
import Lesson8Vocabulary from './components/Freetalking/Lesson8/Lesson8Vocabulary'
import Lesson9TheWeather from './components/Freetalking/Lesson9/Lesson9TheWeather'
import Lesson9Samples from './components/Freetalking/Lesson9/Lesson9Samples'
import Lesson9Vocabulary from './components/Freetalking/Lesson9/Lesson9Vocabulary'
import Lesson10FavoriteThings from './components/Freetalking/Lesson10/Lesson10FavoriteThings'
import Lesson10Samples from './components/Freetalking/Lesson10/Lesson10Samples'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'

Vue.use(VueRouter)
const router = new VueRouter({

    routes:[
    {path: '/BookLists', component: BookLists},
    {path: '/BooksAnalysis', component: BooksAnalysis},
    {path: '/BooksIntroduction', component: BooksIntroduction},
    {path: '/BooksMeetings', component: BooksMeetings},
    {path: '/BooksMain', component: BooksMain},
    {path: '/BooksJournal', component: BooksJournal},
    {path: '/BooksU1OpeningAMeeting', component: BooksU1OpeningAMeeting},
    {path: '/BooksU1WelcomingParticipants', component: BooksU1WelcomingParticipants},
    {path: '/BooksU1Practice', component: BooksU1Practice},
    {path: '/BooksU1Chairing', component: BooksU1Chairing},
    {path: '/BooksU1StudySuggestion', component: BooksU1StudySuggestion},
    {path: '/BooksU2PresentingInformation', component: BooksU2PresentingInformation},
    {path: '/BooksU2Stating', component: BooksU2Stating},
    {path: '/BooksU2Practice', component: BooksU2Practice},
    {path: '/BooksU2Consolidation', component: BooksU2Consolidation},
    {path: '/BooksU2Reference', component: BooksU2Reference},
    {path: '/BooksU2Review', component: BooksU2Review},
    {path: '/BooksU3ProblemSolving', component: BooksU3ProblemSolving},
    {path: '/BooksU3Presentation', component: BooksU3Presentation},
    {path: '/BooksU3Practice', component: BooksU3Practice},
    {path: '/BooksU3Consolidation', component: BooksU3Consolidation},
    {path: '/BooksU3Reference', component: BooksU3Reference},
    {path: '/BooksU4Explaining', component: BooksU4Explaining},
    {path: '/BooksU4Presentation', component: BooksU4Presentation},
    {path: '/BooksU4Practice', component: BooksU4Practice},
    {path: '/BooksU4Consolidation', component: BooksU4Consolidation},
    {path: '/BooksU4Reference', component: BooksU4Reference},
    {path: '/BooksU5AgreeingAndDisagreeing', component: BooksU5AgreeingAndDisagreeing},
    {path: '/BooksU5Presentation', component: BooksU5Presentation},
    {path: '/BooksU5Practice', component: BooksU5Practice},
    {path: '/BooksU5Reference', component: BooksU5Reference},
    {path: '/BooksU6SummarizeAndClosing', component: BooksU6SummarizeAndClosing},
    {path: '/BooksU6Presentation', component: BooksU6Presentation},
    {path: '/BooksU6Practice', component: BooksU6Practice},
    {path: '/BooksU6Reference', component: BooksU6Reference},
    {path: '/Contents', component: Contents},
    {path: '/IntroducingOnesSelf', component: IntroducingOnesSelf},
    {path: '/SetB', component: SetB},
    {path: '/Lesson1Grammar', component: Lesson1Grammar},
    {path: '/Lesson2Vocabulary', component: Lesson2Vocabulary},
    {path: '/Lesson2Travelling', component: Lesson2Travelling},
    {path: '/Lesson2Samples', component: Lesson2Samples},
    {path: '/Lesson3Vocabulary', component: Lesson3Vocabulary},
    {path: '/Lesson3Colors', component: Lesson3Colors},
    {path: '/Lesson3Samples', component: Lesson3Samples},
    {path: '/Lesson4Memories', component: Lesson4Memories},
    {path: '/Lesson4Grammar', component: Lesson4Grammar},
    {path: '/Lesson4Vocabulary', component: Lesson4Vocabulary},
    {path: '/Lesson5Music', component: Lesson5Music},
    {path: '/Lesson5Grammar', component: Lesson5Grammar},
    {path: '/Lesson5Vocabulary', component: Lesson5Vocabulary},
    {path: '/Lesson6Food', component: Lesson6Food},
    {path: '/Lesson6Samples', component: Lesson6Samples},
    {path: '/Lesson6Vocabulary', component: Lesson6Vocabulary},
  /*  {path: '/Lesson7FamilyMembers', component: Lesson7FamilyMembers},
    {path: '/Lesson7Samples', component: Lesson67amples},
    {path: '/Lesson7Vocabulary', component: Lesson7Vocabulary},*/
    {path: '/Lesson8Friendship', component: Lesson8Friendship},
    {path: '/Lesson8Samples', component: Lesson8Samples},
    {path: '/Lesson8Vocabulary', component: Lesson8Vocabulary},
    {path: '/Lesson9TheWeather', component: Lesson9TheWeather},
    {path: '/Lesson9Samples', component: Lesson9Samples},
    {path: '/Lesson9Vocabulary', component: Lesson9Vocabulary},
    {path: '/Lesson10FavoriteThings', component: Lesson10FavoriteThings},
    {path: '/Lesson10Samples', component: Lesson10Samples},

    {path: '/Home', component: Home},
    {path: '/SignIn', component: SignIn},
  /*  {path: '/App', component: App},*/
    {path: '/SignUp', component: SignUpView},
  //  {path: '/HomeUser', component: HomeUser},
    {path: '/HomeUserPersonalInfo/:userID', component: HomeUserPersonalInfo},
    {path: '/newhome', component: newhome},
    {path: '/Summary', component: Summary},
    {path: '/Experience', component: Experience},
    {path: '/Education', component: Education},

  /*  {path: '/sample',php: sample}*/
  ]

})

router.beforeEach((to,from,next)=> {
window.scrollTo(0, 0)
next()
})





export default router
