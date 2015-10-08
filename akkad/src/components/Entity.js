import React, {PropTypes} from "react";
import AkkadAbstractComponent from "./AkkadAbstractComponent";

class Entity extends AkkadAbstractComponent {
	static contextTypes = {
		systems: PropTypes.object
	}

	static childContextTypes = {
		entityID: PropTypes.string
	}

	getChildContext() {
		return {
			entityID: this.id
		}
	}
}

export default Entity;