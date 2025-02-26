/**
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software distributed under the License
 is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 or implied. See the License for the specific language governing permissions and limitations under
 the License.
 **/
import {asLayerObject, withSymbolSortKeys} from "../../utils/utils.js";

let directives = [
    {
        filter: [
            'all',
            ['==', ['get', 'capital'], 'yes'],
            ['==', ['get', 'place'], 'city']
        ],
        'text-size': 16,
        'text-color': 'rgb(25, 25, 25)',
        'symbol-sort-key': ["-", ["to-number", ['get', 'population'], 0]],
    },
    {
        filter: [
            'all',
            ['!=', ['get', 'capital'], 'yes'],
            ['==', ['get', 'place'], 'city']
        ],
        'text-size': 16,
        'text-color': 'rgb(25, 25, 25)',
        'symbol-sort-key': ["-", ["to-number", ['get', 'population'], 0]],
    },
    {
        filter: ['==', ['get', 'place'], 'town'],
        'text-size': 14,
        'text-color': 'rgb(50,50,50)',
    },
    {
        filter: ['==', ['get', 'place'], 'village'],
        'text-size': 12,
        'text-color': 'rgb(75,75,75)',
    },
    {
        filter: ['==', ['get', 'place'], 'locality'],
        'text-size': 12,
        'text-color': 'rgb(75,75,75)',
    },
    // {
    //     filter: [
    //         'in',
    //         ['get', 'place'],
    //         [
    //             'literal', [
    //                 'neighbourhood',
    //                 'quarter',
    //                 'hamlet',
    //                 'isolated_dwelling',
    //                 'islet'
    //             ]
    //         ]
    //     ],
    //     'text-size': 11,
    //     'text-color': 'rgba(100, 100, 100, 1)',
    // },

];

export default asLayerObject(withSymbolSortKeys(directives), {
    id: 'label',
    type: 'symbol',
    source: 'baremaps',
    'source-layer': 'point',
    layout: {
        visibility: 'visible',
        'text-font': ['Noto Sans Regular'],
        'text-field': ['get', 'name'],
    },
    paint: {
        'text-halo-color': 'rgba(255, 255, 255, 0.8)',
        'text-halo-width': 1,
    },
});
