import { ProcessStep } from '../../../../../../../../model/ProcessStep';
import { CreateNodeToolBase } from '../create-node-tool-base';
import { Process } from '../../../../../../../../model/Process';
import { IContainer } from '../../../../../../../../model/IContainer';
import { SpecmateDataService } from '../../../../../../../data/modules/data-service/services/specmate-data.service';
import { SelectedElementService } from '../../../../../../side/modules/selected-element/services/selected-element.service';
import { ElementFactoryBase } from '../../../../../../../../factory/element-factory-base';
import { ProcessStepFactory } from '../../../../../../../../factory/process-step-factory';

export class StepTool extends CreateNodeToolBase<ProcessStep> {

    protected modelType: { className: string; } = Process;

    public icon = 'plus';
    public name = 'tools.addStep';

    protected getElementFactory(coords: { x: number; y: number; }): ElementFactoryBase<ProcessStep> {
        return new ProcessStepFactory(coords, this.dataService);
    }
}
