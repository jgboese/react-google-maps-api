interface InfoBoxOptions {
    alignBottom?: boolean | undefined;
    boxClass?: string | undefined;
    boxStyle?: Partial<CSSStyleDeclaration> | undefined;
    closeBoxMargin?: string | undefined;
    closeBoxURL?: string | undefined;
    content?: string | Node | undefined;
    disableAutoPan?: boolean | undefined;
    enableEventPropagation?: boolean | undefined;
    infoBoxClearance?: google.maps.Size | undefined;
    isHidden?: boolean | undefined;
    maxWidth?: number | undefined;
    pixelOffset?: google.maps.Size | undefined;
    position?: google.maps.LatLng | undefined;
    pane?: keyof google.maps.MapPanes | undefined;
    visible?: boolean | undefined;
    zIndex?: number | undefined;
}

declare class InfoBox {
    content: string | Node;
    disableAutoPan: boolean;
    maxWidth: number;
    pixelOffset: google.maps.Size;
    position: google.maps.LatLng;
    zIndex: number | undefined | null;
    boxClass: string;
    boxStyle: Partial<CSSStyleDeclaration>;
    closeBoxMargin: string;
    closeBoxURL: string;
    infoBoxClearance: google.maps.Size;
    isHidden: boolean;
    alignBottom: boolean;
    pane: keyof google.maps.MapPanes;
    enableEventPropagation: boolean;
    div: HTMLDivElement | null;
    closeListener: google.maps.MapsEventListener | null;
    moveListener: google.maps.MapsEventListener | null;
    mapListener: google.maps.MapsEventListener | null;
    contextListener: google.maps.MapsEventListener | null;
    eventListeners: google.maps.MapsEventListener[] | null;
    fixedWidthSet: boolean | null;
    constructor(options?: InfoBoxOptions);
    createInfoBoxDiv(): void;
    getCloseBoxImg(): string;
    addClickHandler(): void;
    closeClickHandler(event: Event): void;
    getCloseClickHandler(): (event: Event) => void;
    panBox(disablePan?: boolean | undefined): void;
    setBoxStyle(): void;
    getBoxWidths(): {
        bottom: number;
        left: number;
        right: number;
        top: number;
    };
    onRemove(): void;
    draw(): void;
    setOptions(options?: InfoBoxOptions): void;
    setContent(content: string | Node): void;
    setPosition(latLng: google.maps.LatLng): void;
    setVisible(isVisible: boolean): void;
    setZIndex(index: number): void;
    getContent(): string | Node;
    getPosition(): google.maps.LatLng;
    getZIndex(): number | null | undefined;
    getVisible(): boolean;
    show(): void;
    hide(): void;
    open(map: google.maps.Map | google.maps.StreetViewPanorama, anchor?: google.maps.MVCObject | undefined): void;
    close(): void;
    extend<A extends typeof InfoBox>(obj1: A, obj2: typeof google.maps.OverlayView): A;
}

export { InfoBox, InfoBoxOptions };
