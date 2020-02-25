export declare class Topic {
    readonly identifier: string;
    readonly element: HTMLElement;
    readonly heading: HTMLElement;
    readonly content: HTMLElement;
    readonly summary: HTMLElement;
    readonly parent: Topic;
    readonly children: Topic[];
    readonly keywords: Set<string>;
    /**
    * @return The depth of this topic.
    */
    readonly depth: number;
    /**
    * Instantiate a topic from the given element.
    *
    * @param element - An element from wich extracting a topic.
    */
    constructor(element: HTMLElement);
    /**
    * Destroy this topic.
    */
    destroy(): void;
}
export declare namespace Topic {
    /**
    * Extract a topic from the given HTML element.
    *
    * @param element - An element from wich extracting a topic.
    *
    * @return The topic that was extracted.
    *
    * @throw Error if the given element is not a valid topic element.
    */
    function get(element: HTMLElement): Topic;
    /**
    * Return the parent topic of a topic.
    *
    * @param topic - A topic from wich getting the parent topic.
    *
    * @return The parent topic of the given topic.
    */
    function findParentTopic(topic: Topic): Topic;
    /**
    * Return an array of children topic of an existing topic.
    *
    * @param topic - A parent topic from wich getting the children topic.
    *
    * @return An array of children topic.
    */
    function findChildrenTopic(topic: Topic): Topic[];
}
