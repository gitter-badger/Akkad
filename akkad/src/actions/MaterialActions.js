import Babylon from "babylonjs";
import Immutable from "immutable";

const MaterialActions = {
	createMaterial(state, actions, meshID, entityID) {
		const mesh = state.getIn(["meshes", meshID, "mesh"]);
		const scene = state.get("scene");

		const material = new Babylon.StandardMaterial(entityID, scene);

		mesh.material = material;

		return state.setIn(["meshes", meshID, "material"], material);
	}
}

export default MaterialActions;