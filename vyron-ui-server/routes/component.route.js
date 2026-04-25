import express from "express";
import isAuth from "../middlewares/isAuth.js";
import isAdmin from "../middlewares/isAdmin.js";
import { generateComponent, getAllComponents, publishComponent, saveComponent } from "../controllers/component.controller.js";


const componentRouter = express.Router();

// AI generate component
componentRouter.get("/debug-db", async (req, res) => {
  try {
    const components = await (await import("../models/components.model.js")).default.find();
    const publicCount = components.filter(c => c.visibility === "public").length;
    res.json({ total: components.length, public: publicCount, samples: components.slice(0, 5).map(c => ({ name: c.name, vis: c.visibility })) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
componentRouter.post("/generate", isAuth, generateComponent);

// save component
componentRouter.post("/save", isAuth, saveComponent);

// publish component (admin only check controller में already है)
componentRouter.post("/publish", isAuth, isAdmin, publishComponent);

componentRouter.get("/all-components" , getAllComponents)

export default componentRouter;
