'use strict'

function Ladder () {
    this.currentStep = 0;
}

function LadderMethods () {
    this.up = function() {
        this.currentStep++
        return this
    }
    this.down = function() {
        this.currentStep--
        return this
    }
    this.showStep = function() {
        return this.currentStep
    }
    
}

const allLadderMethods = new LadderMethods();
Ladder.prototype = allLadderMethods;

const ladder = new Ladder();
ladder.up().down().down().up().up().showStep() //1