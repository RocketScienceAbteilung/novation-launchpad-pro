
var TopButton =
{
   CURSOR_UP:91,
   CURSOR_DOWN:92,
   CURSOR_LEFT:93,
   CURSOR_RIGHT:94,
   SESSION:95,
   USER1:96,
   USER2:97,
   MIXER:98
};

var MixerButton =
{
   VOLUME:89,
   PAN:79,
   SEND_A:69,
   SEND_B:59,
   STOP:49,
   TRK_ON:39,
   SOLO:29,
   ARM:19
};

function mixColour(red, green, blink)
{
   return (blink ? 8 : 12) | red | (green * 16);
}

var Colour = // Novation are from the UK
{
   OFF:0,
   RED_LOW:13,
   RED_FULL:15,
   AMBER_LOW:29,
   AMBER_FULL:63,
   YELLOW_FULL:62,
   YELLOW_LOW: 0x2D,
   ORANGE:39,
   LIME:0x3D,
   HEADER:mixColour(0,1,false),
   GREEN_LOW:28,
   GREEN_FULL:60,
   RED_FLASHING:11,
   AMBER_FLASHING:59,
   YELLOW_FLASHING:58,
   GREEN_FLASHING:56
};

var LED =
{
   GRID:0,
   SCENE:64,
   TOP:91,

   CURSOR_UP:0,
   CURSOR_DOWN:1,
   CURSOR_LEFT:2,
   CURSOR_RIGHT:3,
   SESSION:4,
   USER1:5,
   USER2:6,
   MIXER:7,

   VOLUME:0,
   PAN:1,
   SEND_A:2,
   SEND_B:3,
   STOP:4,
   TRK_ON:5,
   SOLO:6,
   ARM:7
};

var NUM_TRACKS = 8;
var NUM_SENDS = 2;
var NUM_SCENES = 8;
