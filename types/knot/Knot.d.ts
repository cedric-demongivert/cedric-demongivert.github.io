import { Vector2f, Vector3f } from '@cedric-demongivert/gl-tool-math';
import { HalfedgeStructure, Vertex, Halfedge } from '@cedric-demongivert/gl-tool-halfedge';
declare type KnotCapacity = {
    vertices: number;
    halfedges: number;
    faces: number;
};
export declare class Knot extends HalfedgeStructure {
    private _locations;
    private _radius;
    /**
    * Instantiate a new empty 2D knot with the given capacity.
    *
    * @param capacity - An object that describe the capacity to allocate to the new knot structure.
    */
    constructor(capacity: KnotCapacity);
    createVertex(): Vertex;
    subdivide(): void;
    getRadius(vertex: Vertex): number;
    setRadius(vertex: Vertex, radius: number): void;
    extractLocation(vertex: Vertex, output: Vector2f): Vector2f;
    extractHomogeneousLocation(vertex: Vertex, output: Vector3f): Vector3f;
    setStaticLocation(vertex: Vertex, x: number, y: number): void;
    setLocation(vertex: Vertex, input: Vector2f): void;
    setHomogeneousLocation(vertex: Vertex, input: Vector3f): void;
    getLocation(vertex: Vertex): Vector2f;
    getHomogeneousLocation(vertex: Vertex): Vector3f;
    x(vertex: Vertex): number;
    y(vertex: Vertex): number;
    extractDirection(halfedge: Halfedge, output: Vector2f): Vector2f;
    dx(halfedge: Halfedge): number;
    dy(halfedge: Halfedge): number;
    length(halfedge: Halfedge): number;
    squaredLength(halfedge: Halfedge): number;
}
export {};
