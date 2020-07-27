import { createElement } from 'lwc';
import HelperTextList from 'c/helperTextList';

describe('c-helper-text-list', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM.
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });
    
    test('element has does not have comma when first item', () => {
        const element = createElement('c-helper-text-list', { is: HelperTextList });
        document.body.appendChild(element);
        // Property value is assigned after the component is inserted into the DOM
        element.index = 0;
        const span = element.shadowRoot.querySelector('span');
        
        // Use a promise to wait for asynchronous changes to the DOM
        return Promise.resolve().then(() => {
            expect(span.textContent).not.toBe(', ');
        });
    });
    test('element has does have comma when second item', () => {
        const element = createElement('c-helper-text-list', { is: HelperTextList });
        element.index = 1;
        document.body.appendChild(element);
        
        // Use a promise to wait for asynchronous changes to the DOM
        return Promise.resolve().then(() => {
            const span = element.shadowRoot.querySelector('.comma');
            expect(span.textContent).toBe(', ');
        });
    });
});