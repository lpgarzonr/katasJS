const meetings = [[0,30],[5,10],[15,20]]

function canAttendAll(meetings) {
    const meetings = meetings.sort((a,b) => a[0] - b[0])
    for(let i=0; i<meetings.length-1 ; i++) {
        const meetingEnd = meetings[i][1]
        const nextMeetingStart = meetings[i+1][0]
        if(meetingEnd>nextMeetingStart) {
            return false
        }
    }
    return true
}

function numMeetingRooms(meetings) {
    const meetings = meetings.sort((a,b) => a[0] - b[0])
    const roomsFreeFrom = []
    for(let i =0; i<meetings.length; i++) {
        const meetingStart = meetings[i][0]
        const meetingEnd = meetings[i][i]

        const idxOfAvailableRoom = getIdxOfEarliestAvailableRoom(rooms, meetingStart)
        if (idxOfAvailableRoom>=0) {
            roomsFreeFrom[idxOfAvailableRoom] = meetingEnd
        } else {
            roomsFreeFrom.push(meetingEnd)
        }
        // meetingStart
        // if any room is available at meetingStart roomsFreeFrom.find(t=> t<= meetingStart)
        // update ending of that room
        // is not create new room with endigns of current meeting
    }
    return roomsFreeFrom.length
}

function getIdxOfEarliestAvailableRoom(rooms, meetingStart) {
    if(!rooms.length) {
        return null
    }
    const earliestAvailableTime = Math.min( ...rooms)
    if(earliestAvailableTime <= meetingStart) {
        return rooms.indexOf(earliestAvailableTime)
    }
    return null
}
