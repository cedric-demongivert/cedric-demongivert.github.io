import { Topic } from './Topic';
export declare class Topics {
    readonly topics: Set<Topic>;
    readonly roots: Set<Topic>;
    constructor();
    capture(root: HTMLElement): Promise<void>;
    clear(): void;
}
