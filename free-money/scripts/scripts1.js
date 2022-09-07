// 私は愚かだ
// by クソ | へうて

$json = file_get_contents('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=52A66B13219F645834149F1A1180770A&steamids=76561197960435530');
$parsed = json_decode($json);

foreach($parsed->response->players as $player){
    echo $player->personaname . '<br>';
    echo "<img src='" . $player->avatar . "'>";
}