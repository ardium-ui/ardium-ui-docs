import { ApiPageData } from 'src/app/components/api-page';

export const HttpServiceApiData: ApiPageData = {
  name: 'HTTP Service',
  interfaces: [
    {
      name: 'RequestOptions',
      description: 'Represents the options that can be passed to an HTTP request.',
      properties: [
        {
          name: 'body',
          type: 'any',
        },
        {
          name: 'headers',
          type: 'HttpHeaders | { [header: string]: string | string[] }',
        },
        {
          name: 'context',
          type: 'HttpContext',
        },
        {
          name: 'observe',
          type: `'body' | 'events' | 'response'`,
        },
        {
          name: 'params',
          type: `HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> }`,
        },
        {
          name: 'reportProgress',
          type: 'boolean',
        },
        {
          name: 'responseType',
          type: `'arraybuffer' | 'blob' | 'json' | 'text'`,
        },
        {
          name: 'withCredentials',
          type: 'boolean',
        },
        {
          name: 'transferCache',
          type: '{ includeHeaders?: string[] } | boolean',
        },
      ],
    },
  ],
  types: [
    {
      name: 'RequestReturnType',
      description:
        'Defines the return type of an HTTP request based on the observe and responseType properties.</p><p>This is a very complicated conditional type, but basically it encompasses all 16 possible return types of an HttpClient function into a single type.',
      definition: `type RequestReturnType<
  O extends RequestOptions,
  TRes = any,
> = O['observe'] extends 'body'
  ? O['responseType'] extends 'arraybuffer'
    ? ArrayBuffer
    : O['responseType'] extends 'blob'
      ? Blob
      : O['responseType'] extends 'text'
        ? string
        : TRes
  : O['observe'] extends 'response'
    ? HttpResponse<
        O['responseType'] extends 'arraybuffer'
          ? ArrayBuffer
          : O['responseType'] extends 'blob'
            ? Blob
            : O['responseType'] extends 'text'
              ? string
              : TRes
      >
    : O['observe'] extends 'events'
      ? HttpEvent<
          O['responseType'] extends 'arraybuffer'
            ? ArrayBuffer
            : O['responseType'] extends 'blob'
              ? Blob
              : O['responseType'] extends 'text'
                ? string
                : TRes
        >
      : never;`,
      typeParams: [
        {
          name: 'O',
          type: 'RequestOptions',
          description: 'The request options type.',
        },
        {
          name: 'TRes',
          type: 'any',
          default: 'any',
          description: 'The response data type.',
        },
      ],
    },
  ],
  classes: [
    {
      name: '_HttpService',
      description: 'Internal HTTP service class that provides methods for making various HTTP requests.',
      properties: [
        {
          name: 'apiUrl',
          type: 'readonly string',
          description: 'Base URL for all requests.',
        },
      ],
      methods: [
        {
          name: 'request',
          description: 'Sends an HTTP request using the given method or HttpRequest object.',
          params: [
            {
              name: 'methodOrReq',
              type: 'string | HttpRequest<any>',
              description: 'HTTP method as a string, or an HttpRequest object to be sent.',
              required: true,
            },
            {
              name: 'url',
              type: 'string',
              description: 'The endpoint URL, used only if methodOrReq is a string.',
            },
            {
              name: 'options',
              type: 'O',
              description: 'Optional request options to configure the request.',
            },
          ],
          typeParams: [
            {
              name: 'TRes',
              type: 'Object',
              default: 'Object',
              description: 'The response data type.',
            },
            {
              name: 'O',
              type: 'RequestOptions',
              default: '{}',
              description: 'The request options type.',
            },
          ],
          returnType: 'Observable<RequestReturnType<O, TRes>>',
        },
        {
          name: 'delete',
          description: 'Sends a DELETE request to the specified URL.',
          params: [
            {
              name: 'url',
              type: 'string',
              description: 'The endpoint URL.',
              required: true,
            },
            {
              name: 'options',
              type: 'O & { body?: TBody }',
              description: 'Optional request options, which may include a body.',
            },
          ],
          typeParams: [
            {
              name: 'TBody',
              type: 'Object',
              default: 'Object',
              description: 'The body type for the DELETE request, if any.',
            },
            {
              name: 'TRes',
              type: 'Object',
              default: 'Object',
              description: 'The response data type.',
            },
            {
              name: 'O',
              type: 'RequestOptions',
              default: '{}',
              description: 'The request options type.',
            },
          ],
          returnType: 'Observable<RequestReturnType<O, TRes>>',
        },
        {
          name: 'get',
          description: 'Sends a GET request to the specified URL.',
          params: [
            {
              name: 'url',
              type: 'string',
              description: 'The endpoint URL.',
              required: true,
            },
            {
              name: 'options',
              type: 'O',
              description: 'Optional request options to configure the request.',
            },
          ],
          typeParams: [
            {
              name: 'TRes',
              type: 'Object',
              default: 'Object',
              description: 'The response data type.',
            },
            {
              name: 'O',
              type: 'RequestOptions',
              default: '{}',
              description: 'The request options type.',
            },
          ],
          returnType: 'Observable<RequestReturnType<O, TRes>>',
        },
        {
          name: 'head',
          description: 'Sends a HEAD request to the specified URL.',
          params: [
            {
              name: 'url',
              type: 'string',
              description: 'The endpoint URL.',
              required: true,
            },
            {
              name: 'options',
              type: 'O',
              description: 'Optional request options to configure the request.',
            },
          ],
          typeParams: [
            {
              name: 'TRes',
              type: 'Object',
              default: 'Object',
              description: 'The response data type.',
            },
            {
              name: 'O',
              type: 'RequestOptions',
              default: '{}',
              description: 'The request options type.',
            },
          ],
          returnType: 'Observable<RequestReturnType<O, TRes>>',
        },
        {
          name: 'jsonp',
          description: 'Sends a JSONP request to the specified URL with the provided callback parameter.',
          params: [
            {
              name: 'url',
              type: 'string',
              description: 'The resource URL to request.',
              required: true,
            },
            {
              name: 'callbackParam',
              type: 'string',
              description: 'The name of the callback parameter in the JSONP request.',
              required: true,
            },
          ],
          typeParams: [
            {
              name: 'TRes',
              type: 'Object',
              default: 'Object',
              description: 'The response data type.',
            },
          ],
          returnType: 'Observable<TRes>',
        },
        {
          name: 'options',
          description: 'Sends an OPTIONS request to the specified URL.',
          params: [
            {
              name: 'url',
              type: 'string',
              description: 'The endpoint URL.',
              required: true,
            },
            {
              name: 'options',
              type: 'O',
              description: 'Optional request options to configure the request.',
            },
          ],
          typeParams: [
            {
              name: 'TRes',
              type: 'Object',
              default: 'Object',
              description: 'The response data type.',
            },
            {
              name: 'O',
              type: 'RequestOptions',
              default: '{}',
              description: 'The request options type.',
            },
          ],
          returnType: 'Observable<RequestReturnType<O, TRes>>',
        },
        {
          name: 'patch',
          description: 'Sends a PATCH request to the specified URL with the provided body.',
          params: [
            {
              name: 'url',
              type: 'string',
              description: 'The endpoint URL.',
              required: true,
            },
            {
              name: 'body',
              type: 'TBody | null',
              description: 'The resources to be updated using PATCH.',
            },
            {
              name: 'options',
              type: 'O',
              description: 'Optional request options to configure the request.',
            },
          ],
          typeParams: [
            {
              name: 'TBody',
              type: 'any',
              default: 'any',
              description: 'The type of the PATCH body content.',
            },
            {
              name: 'TRes',
              type: 'Object',
              default: 'Object',
              description: 'The response data type.',
            },
            {
              name: 'O',
              type: 'RequestOptions',
              default: '{}',
              description: 'The request options type.',
            },
          ],
          returnType: 'Observable<RequestReturnType<O, TRes>>',
        },
        {
          name: 'post',
          description: 'Sends a POST request to the specified URL with the provided body.',
          params: [
            {
              name: 'url',
              type: 'string',
              description: 'The endpoint URL.',
              required: true,
            },
            {
              name: 'body',
              type: 'TBody | null',
              description: 'The content to be sent in the POST request.',
            },
            {
              name: 'options',
              type: 'O',
              description: 'Optional request options to configure the request.',
            },
          ],
          typeParams: [
            {
              name: 'TBody',
              type: 'any',
              default: 'any',
              description: 'The type of the POST body content.',
            },
            {
              name: 'TRes',
              type: 'Object',
              default: 'Object',
              description: 'The response data type.',
            },
            {
              name: 'O',
              type: 'RequestOptions',
              default: '{}',
              description: 'The request options type.',
            },
          ],
          returnType: 'Observable<RequestReturnType<O, TRes>>',
        },
        {
          name: 'put',
          description: 'Sends a PUT request to the specified URL with the provided body.',
          params: [
            {
              name: 'url',
              type: 'string',
              description: 'The endpoint URL.',
              required: true,
            },
            {
              name: 'body',
              type: 'TBody | null',
              description: 'The resources to be added/updated using PUT.',
            },
            {
              name: 'options',
              type: 'O',
              description: 'Optional request options to configure the request.',
            },
          ],
          typeParams: [
            {
              name: 'TBody',
              type: 'any',
              default: 'any',
              description: 'The type of the PUT body content.',
            },
            {
              name: 'TRes',
              type: 'Object',
              default: 'Object',
              description: 'The response data type.',
            },
            {
              name: 'O',
              type: 'RequestOptions',
              default: '{}',
              description: 'The request options type.',
            },
          ],
          returnType: 'Observable<RequestReturnType<O, TRes>>',
        },
      ],
    },
  ],
  functions: [
    {
      name: 'createHttpService',
      description: 'Creates an HTTP service instance with a base URL and optional default request options.',
      params: [
        {
          name: 'apiUrl',
          type: 'string',
          description: 'Base URL for all requests made by this service.',
          required: true,
        },
        {
          name: 'defaultOptions',
          type: 'RequestOptions',
          description: 'Default request options merged into each request if provided.',
        },
      ],
      returnType: '_HttpService',
    },
  ],
};
