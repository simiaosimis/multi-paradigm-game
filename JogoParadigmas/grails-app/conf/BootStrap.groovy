import game.Player

class BootStrap {

    def init = { servletContext ->
    	new Player(100,100,0,0).save();
    }
    def destroy = {
    }
}
