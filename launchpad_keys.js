
/*
 * KEYS PAGE
 *
 * */

keysPage = new Page();

keysPage.title = "Keys / Drums";

keysPage.updateOutputState = function()
{
   clear();
   this.canScrollUp = activeNoteMap.canScrollUp();
   this.canScrollDown = activeNoteMap.canScrollDown();
   this.canScrollLeft = activeNoteMap.canScrollLeft();
   this.canScrollRight = activeNoteMap.canScrollRight();
   this.updateScrollButtons();
   setTopLED(5,
      TEMPMODE == TempMode.USER1
         ? Colour.GREEN_FULL
         : (TEMPMODE == TempMode.OFF
         ? Colour.YELLOW_FULL
         : Colour.OFF));
   for(var i=0; i<4; i++)
   {
       var isCurrent = noteMaps[i] == activeNoteMap;
       var hasMap = noteMaps[i] != null;
       setRightLED(i, hasMap ? (isCurrent ? Colour.GREEN_FULL : Colour.GREEN_LOW) : Colour.OFF);
   }

   this.drawKeys();
};

keysPage.onShift = function(isPressed)
{
}

keysPage.onSceneButton = function(row, isPressed)
{
   if (!isPressed) return;

   if (noteMaps[row] != null)
   {
      activeNoteMap = noteMaps[row];

      host.showPopupNotification("Scale: " + activeNoteMap.getName());

      updateNoteTranlationTable(activeNoteMap);
   }
};

keysPage.onLeft = function(isPressed)
{
   if (isPressed)
   {
      activeNoteMap.scrollLeft();
   }
};

keysPage.onRight = function(isPressed)
{
   if (isPressed)
   {
      activeNoteMap.scrollRight();
   }
};

keysPage.onUp = function(isPressed)
{
   if (isPressed)
   {
      activeNoteMap.scrollUp();
   }
};

keysPage.onDown = function(isPressed)
{
   if (isPressed)
   {
      activeNoteMap.scrollDown();
   }
};

keysPage.scrollKey = function(offset)
{
   keysPage.rootKey = Math.max(0, Math.min(70, keysPage.rootKey + offset));
};

keysPage.onGridButton = function(row, column, velocity)
{
   /*var pressed = velocity > 0;
   var key = activeNoteMap.cellToKey(column, row);

   if (key >= 0)
   {
      if (pressed)
      {
         cursorTrack.startNote(key, velocity);
      }
      else
      {
         cursorTrack.stopNote(key, velocity);
      }
   }*/
};

keysPage.drawKeys = function()
{
   for(var y=0; y<8; y++)
   {
      for(var x=0; x<8; x++)
      {
         activeNoteMap.drawCell(x, y, false);
      }
   }
};

keysPage.shouldKeyBeUsedForNoteInport = function(x,y)
{
   return true;
}
