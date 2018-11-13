var expect = require('chai').expect
var gameOfLife = require('./gameOfLife.js')

describe("Game of Life Function", function(){
    it("live cell dies by underpopulation", function(){
        var neighbours = 0
        var currentState = true
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);

        neighbours = 1
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);
    })

    it("any live cell with 2 or 3 neighbours lives", function(){
        var neighbours = 2
        var currentState = true
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(true);

        neighbours = 3
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(true);
    })

    it("any live cell more than 3 neighbours dies by overpopulation", function(){
        var currentState = true
        var neighbours = 4
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);

        neighbours = 5
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);
    })

    it("any dead cell with exactly 3 neighbours lives by reproduction", function(){
        var currentState = false;
        var neighbours = 3
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(true);

        neighbours = 0
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);

        neighbours = 1
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);

        neighbours = 2
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);

        // neighbours = 4
        // expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);
    })
})