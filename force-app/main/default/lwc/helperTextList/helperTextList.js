import { LightningElement, api } from 'lwc';

export default class HelperTextList extends LightningElement {
    @api index;
    hasMultiple = false;
    renderedCallback() {
        if (this.index >= 1) {
            this.hasMultiple = true;
        }
    }
}    
 