import { Component, Input } from '@angular/core';
import { IContainer } from '../../../../../model/IContainer';
import { CEGModel } from '../../../../../model/CEGModel';
import { SpecmateDataService } from '../../../../data/modules/data-service/services/specmate-data.service';
import { ConfirmationModal } from '../../../../notification/modules/modals/services/confirmation-modal.service';
import { NavigatorService } from '../../../../navigation/modules/navigator/services/navigator.service';
import { TranslateService } from '@ngx-translate/core';
import { Requirement } from '../../../../../model/Requirement';
import { SelectedElementService } from '../../../../views/side/modules/selected-element/services/selected-element.service';
import { ElementProvider } from '../../../../views/main/editors/modules/graphical-editor/providers/properties/element-provider';

@Component({
    moduleId: module.id.toString(),
    selector: 'ceg-model-generator-button',
    templateUrl: 'ceg-model-generator-button.component.html',
    styleUrls: ['ceg-model-generator-button.component.css']
})

export class CegModelGeneratorButton {

    private contents: IContainer[];

    private _model: CEGModel ;

    private _requirement: Requirement ;

    public get requirement(): Requirement {
        return this._requirement;
    }

    @Input()
    public set requirement(requirement: Requirement) {
        if (!requirement) {
            return;
        }
        this._requirement = requirement;
    }
    public get model(): CEGModel  {
        return this._model;
    }

    @Input()
    public set model(model: CEGModel) {
        if (!model) {
            return;
        }
        this._model = model;
        this.dataService.readContents(model.url).then((contents: IContainer[]) => {
            this.contents = contents;
        });
    }

    constructor(private dataService: SpecmateDataService,
        private modal: ConfirmationModal,
        private translate: TranslateService,
        private selectedElementService: SelectedElementService) { }

    public async generate(): Promise<void> {
        if (!this.enabled) {
            return;
        }

        try {
            await this.modal.
                openOkCancel(this.translate.instant('CEGGenerator.confirm'), this.translate.instant('CEGGenerator.confirmationTitle'));
            await this.selectedElementService.deselect();
            this.selectedElementService.deselect();
            const contents = await this.dataService.readContents(this.model.url);
            let elementProvider = new ElementProvider(this.model, contents);
            await this.dataService.commit(this.translate.instant('save'));
            await this.dataService.clearModel(elementProvider.nodes, elementProvider.connections);
            await this.dataService.commit(this.translate.instant('save'));
            await this.dataService.performOperations(this.model.url, 'generateModel');
            await this.dataService.deleteCachedContent(this.model.url);
            await this.dataService.readElement(this.model.url, false);
            await this.dataService.readContents(this.model.url, false);
            this.selectedElementService.select(this.model);
        } catch (e) {
            throw e;
        }
    }

    public get enabled(): boolean {
        if (this.model === undefined) {
            return false;
        }
        return true;
    }
}
