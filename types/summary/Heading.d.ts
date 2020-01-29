import { View } from '@cedric-demongivert/gl-tool-collection';
export declare class Heading {
    private _children;
    private _childrenView;
    private _parent;
    private _content;
    private _identifier;
    constructor();
    identifier: string;
    readonly depth: number;
    parent: Heading;
    readonly children: View<Heading>;
    content: string;
    attach(child: Heading): void;
    detach(child: Heading): void;
    has(child: Heading): boolean;
}
