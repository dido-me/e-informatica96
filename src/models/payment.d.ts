export interface EnvíoGratuito {
    free_shipping: string;
}

export interface PrecioFijo {
    flat_rate: string;
    'flat_rate:1': string;
}

export interface RecogidaLocal {
    local_pickup: string;
}

export interface Options {
    'Precio fijo': PrecioFijo;
    'Envío gratuito': EnvíoGratuito;
    'Recogida local': RecogidaLocal;
}

export interface EnableForMethods {
    id: string;
    label: string;
    description: string;
    type: string;
    value: string;
    default: string;
    tip: string;
    placeholder: string;
    options?: Options;
}

export interface Settings {
    title: EnableForMethods;
    instructions: EnableForMethods;
    enable_for_methods?: EnableForMethods;
    enable_for_virtual?: EnableForMethods;
}

export interface Collection {
    href: string;
}

export interface Links {
    self: Collection[];
    collection: Collection[];
}

export interface Payment {
    id: string;
    title: string;
    description: string;
    order: string;
    enabled: boolean;
    method_title: string;
    method_description: string;
    method_supports: string[];
    settings: Settings;
    needs_setup: boolean;
    post_install_scripts: any[];
    settings_url: string;
    connection_url: null;
    setup_help_text: null;
    required_settings_keys: any[];
    _links: Links;
}
