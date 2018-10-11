<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
class ClassCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:Class';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        
      $redis = \LRedis::connection();
      $client = new Client;
      $response = $client->request('POST', 
'http://phone.megatalking.com/api/get_schedulesBeforeN_json.php', [
  'form_params' => [
          'min' => 10
      ] ]);
          $data = $response->getBody();
          $decode = json_decode($data);
            if($decode){
            $classArray = array($decode);
            $encodedData = json_encode($classArray);
            $redis->publish('ClassSchedule', $encodedData);
            }
    }

}
