var nextState = function(currentState, neighbours){
    return (neighbours === 2 || neighbours === 3)? true : false
}

module.exports = {
    nextState: nextState
}