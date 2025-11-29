const { saveLead } = require("../services/lead.service");

exports.submitLead = (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({
            success: false,
            message: "Name, email and phone are required."
        });
    }

    saveLead({ name, email, phone, message });

    res.json({
        success: true,
        message: "Lead submitted successfully!"
    });
};
