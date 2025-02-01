function play_sound(folder_name, randomizer){
    var random_sound = Math.ceil(Math.random() * randomizer);
    if (random_sound<10){
        random_sound = '0' + random_sound
    }
    console.log('samples/' + folder_name + '/hit-' + random_sound + '.wav');
    var audio = new Audio('samples/' + folder_name + '/hit-' + random_sound + '.wav');
    audio.play();
}