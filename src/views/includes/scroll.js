const timeTable = document.getElementsByClassName('timetable')[0];
const compactRooms = document.getElementsByClassName('room-elem');

if (screen.width < 1280) {
  timeTable.scrollLeft = 181;
}

timeTable.onscroll = function () {

  if (timeTable.scrollLeft >= 181) {

    for (let index = 0; index < compactRooms.length; index++) {
      const element = compactRooms[index];
      element.classList.add('room-elem--compact');
    }

  }

  if (timeTable.scrollLeft < 181) {

    for (let index = 0; index < compactRooms.length; index++) {
      const element = compactRooms[index];
      element.classList.remove('room-elem--compact');
    }
  }
}
