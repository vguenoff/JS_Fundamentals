var a = 2,
    b = 2,
    c = 3;

if ((a < b + c) && (b < a + c) && (c < a + b)) {
    console.log('This triangle could be built.');
} else {
    console.log('This triangle couldn\'t be built.');
}