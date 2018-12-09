const timeTable = document.getElementsByClassName('timetable')[0];
const compactRooms = document.getElementsByClassName('room-elem');
const roomsOuter = document.getElementsByClassName('list-floors__room');
const listRooms = document.getElementsByClassName('list-floors content__list-floors')[0];

if (screen.width < 1280) {
  timeTable.scrollLeft = 181;
}

timeTable.onscroll = function () {

  if (timeTable.scrollLeft >= 169) {

    for (let index = 0; index < compactRooms.length; index++) {
      const element = compactRooms[index];
      element.classList.add('room-elem--compact');
    }
    
    for (let index = 0; index < roomsOuter.length; index++) {
      const element = roomsOuter[index];
      element.classList.add('list-floors__room--compact');
    }

    listRooms.classList.add('content__list-floors--compact');

  }

  if (timeTable.scrollLeft < 169) {

    for (let index = 0; index < compactRooms.length; index++) {
      const element = compactRooms[index];
      element.classList.remove('room-elem--compact');
    }

    for (let index = 0; index < roomsOuter.length; index++) {
      const element = roomsOuter[index];
      element.classList.remove('list-floors__room--compact');
    }

    listRooms.classList.remove('content__list-floors--compact');
  }
}
