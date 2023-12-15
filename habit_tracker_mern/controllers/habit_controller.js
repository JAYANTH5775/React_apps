const Habit = require("../models/Habit");

// Habit controller

module.exports.load = function (req, res) {
    Habit.find({}, function (err, habits) {
        if (err) {
            console.log('Error in loading habits');
            return;
        }
        return res.render('home', {
            title: "Habit Tracker",
            habit_list: habits
        });
    });


}




module.exports.add = function (res, res) {

    req.body.record_tracker = {};

    res.body.user = "ANyuser";

    console.log(req.body);


    Habit.create(req.body, function (err, newhabit) {
        if (err) {
            console.log("erorr in creating the Habit");
            return;
        }

        else {
            return res.redirect("back");
        }


    })
}



module.exports.delete = function (req, res) {

    let id = req.query.id;

    Habit.findByIdAndDelete(id, function (err) {

        if (err) {
            console.log("Error  in  deleteing the habit");
        }

        else {
            return response.redirect('back');
        }
    })
}





module.exports.viewhabit = function (req, res) {
    if (err) {

        console.log("error in   vieing the habot");
        return;

    }

    else {
        res.render("habit.ejs", { "habit": habit });
    }
})

}


module.exports.update = function (req, res) {

    let id = req.query.id;

    Habit.findById(id, function (err, habit) {
        if (err) {
            console.log("error in  finding the habit");
            return;
        }

        else {
            habit.record_tracker.set(req.body.date, req.body.status);
            habit.save();
            return res.redirect("back");
        }
    })
}
