import os.path
import tornado.ioloop
import tornado.web
from tornado import gen,httpclient
import json
import motor
from tornado.gen import Return

db = motor.motor_tornado.MotorClient().template



class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")






application = tornado.web.Application(
    [
        (r"/", MainHandler),
    ],
    static_path=os.path.join(os.path.dirname(__file__), "static"),
    db = db,
)

if __name__ == "__main__":
    application.listen(8081)
    tornado.ioloop.IOLoop.current().start()