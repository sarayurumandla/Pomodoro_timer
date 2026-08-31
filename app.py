from flask import Flask, render_template, jsonify
#flask-> creates web application, render= lets python load html file, sends data back to js in json format

app = Flask(__name__)
#creates flask applicatipn

#function runs when someone visits home page
@app.route("/")
def home():
    return render_template("index.html") #finds + displays index.html to users browser

#start button
@app.route("/start", methods=["POST"]) 
def start(): 
    return jsonify({"message": "Pomodoro started"}) #sends small msg back to js

#pause button 
@app.route("/pause", methods=["POST"]) 
def pause(): 
    return jsonify({"message": "Pomodoro paused"}) 


#reset button 
@app.route("/reset", methods=["POST"]) 
def reset(): 
    return jsonify({"message": "Pomodoro reset"})


#run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
    #debug=True means flask gives useful erorr msgs 