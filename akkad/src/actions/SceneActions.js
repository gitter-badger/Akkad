import Babylon from "babylonjs";
import Immutable from "immutable";

export default {
    setScene(state, actions, sceneID) {
        const engine = state.getIn(["entities", state.get("engineID"), "entity"]);
        const scene = new Babylon.Scene(engine);

        const sceneObj = Immutable.Map({
            id: sceneID,
            entity: scene,
            type: "scene"
        });

        state = state.setIn(["entities", sceneID], sceneObj);
        state = state.set("sceneID", sceneID);

        return state;
    },

    disposeScene(state, actions, sceneID) {
        const scene = state.getIn(["entities", sceneID, "entity"]);

        scene.dispose();

        state.delete("sceneID");
        state.deleteIn(["entities", sceneID]);

        return state;
    },

    startRenderLoop(state, actions, sceneID) {
        const engine = state.getIn(["entities", state.get("engineID"), "entity"]);
        const scene = state.getIn(["entities", sceneID, "entity"]);

        engine.runRenderLoop(function(){
            scene.render();
        });

        return state;
    },

    stopRenderLoop(state) {
        const engine = state.getIn(["entities", state.get("engineID"), "entity"]);

        engine.stopRenderLoop();

        return state;
    }
};