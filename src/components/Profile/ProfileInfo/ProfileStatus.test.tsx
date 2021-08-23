import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="test" updateStatus={() => ''}/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe("test");
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="test" updateStatus={() => ''}/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="test" updateStatus={() => ''}/>);
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    });
    test("after creation <span> should contains correct value", () => {
        const component = create(<ProfileStatus status="test" updateStatus={() => ''}/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('test');
    });
    test("input should by displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status="test" updateStatus={() => ''}/>);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('test');
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="test" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        // @ts-ignore
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});