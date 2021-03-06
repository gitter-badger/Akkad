import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderMesh extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object, 
        actions: PropTypes.object
    }

    static propTypes = {
        targetEntityID: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        fileName: PropTypes.string.isRequired
    }

    componentDidMount() {
        const {path, fileName} = this.props;
        const {actions, entityID} = this.context;
        const {importMesh} = actions._internal;

        importMesh(path, fileName, entityID);
    }

    componentWillUnmount() {
        const {actions, entityID} = this.context;
        const {disposeEntity} = actions._internal;

        disposeEntity(entityID);
    }

}

export default RenderMesh;