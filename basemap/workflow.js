/**
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software distributed under the License
 is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 or implied. See the License for the specific language governing permissions and limitations under
 the License.
 **/
import config from "./config.js";

export default {
  "steps": [
    // {
    //   "id": "natural-earth",
    //   "needs": [],
    //   "tasks": [
    //     {
    //       "type": "DownloadUrl",
    //       "url": "https://naciscdn.org/naturalearth/packages/natural_earth_vector.gpkg.zip",
    //       "path": "data/natural_earth_vector.gpkg.zip"
    //     },
    //     {
    //       "type": "UnzipFile",
    //       "file": "data/natural_earth_vector.gpkg.zip",
    //       "directory": "data/natural_earth_vector"
    //     },
    //     {
    //       "type": "ImportGeoPackage",
    //       "file": "data/natural_earth_vector/packages/natural_earth_vector.gpkg",
    //       "database": config.database,
    //       "sourceSRID": 4326,
    //       "targetSRID": 3857
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/ne_index.sql",
    //       "database": config.database,
    //       "parallel": true,
    //     }
    //   ]
    // },
    {
      "id": "globaladm0",
      "needs": [],
      "tasks": [
        {
          "type": "DownloadUrl",
          "url": "https://github.com/wmgeolab/geoBoundaries/raw/main/releaseData/CGAZ/geoBoundariesCGAZ_ADM0.gpkg",
          "path": "data/geoBoundariesCGAZ_ADM0.gpkg"
        },
        {
          "type": "ImportGeoPackage",
          "file": "data/geoBoundariesCGAZ_ADM0.gpkg",
          "database": config.database,
          "sourceSRID": 4326,
          "targetSRID": 3857
        },
        {
          "type": "ExecuteSql",
          "file": "queries/globaladm0_clean.sql",
          "database": config.database,
          "parallel": true,
        },
        {
          "type": "ExecuteSql",
          "file": "queries/globaladm0_simplify.sql",
          "database": config.database,
          "parallel": true,
        },
        {
          "type": "ExecuteSql",
          "file": "queries/globaladm0_index.sql",
          "database": config.database,
          "parallel": true,
        }
      ]
    },
    {
      "id": "globaladm1",
      "needs": [],
      "tasks": [
        {
          "type": "DownloadUrl",
          "url": "https://github.com/wmgeolab/geoBoundaries/raw/main/releaseData/CGAZ/geoBoundariesCGAZ_ADM1.gpkg",
          "path": "data/geoBoundariesCGAZ_ADM1.gpkg"
        },
        {
          "type": "ImportGeoPackage",
          "file": "data/geoBoundariesCGAZ_ADM1.gpkg",
          "database": config.database,
          "sourceSRID": 4326,
          "targetSRID": 3857
        },
        {
          "type": "ExecuteSql",
          "file": "queries/globaladm1_clean.sql",
          "database": config.database,
          "parallel": true,
        },
        {
          "type": "ExecuteSql",
          "file": "queries/globaladm1_simplify.sql",
          "database": config.database,
          "parallel": true,
        },
        {
          "type": "ExecuteSql",
          "file": "queries/globaladm1_index.sql",
          "database": config.database,
          "parallel": true,
        }
      ]
    },
    {
      "id": "globaladm2",
      "needs": [],
      "tasks": [
        {
          "type": "DownloadUrl",
          "url": "https://github.com/wmgeolab/geoBoundaries/raw/main/releaseData/CGAZ/geoBoundariesCGAZ_ADM2.gpkg",
          "path": "data/geoBoundariesCGAZ_ADM2.gpkg"
        },
        {
          "type": "ImportGeoPackage",
          "file": "data/geoBoundariesCGAZ_ADM2.gpkg",
          "database": config.database,
          "sourceSRID": 4326,
          "targetSRID": 3857
        },
        {
          "type": "ExecuteSql",
          "file": "queries/globaladm2_clean.sql",
          "database": config.database,
          "parallel": true,
        },
        {
          "type": "ExecuteSql",
          "file": "queries/globaladm2_simplify.sql",
          "database": config.database,
          "parallel": true,
        },
        {
          "type": "ExecuteSql",
          "file": "queries/globaladm2_index.sql",
          "database": config.database,
          "parallel": true,
        }
      ]
    },
    // {
    //   "id": "water-polygons",
    //   "needs": [],
    //   "tasks": [
    //     {
    //       "type": "DownloadUrl",
    //       "url": "https://osmdata.openstreetmap.de/download/water-polygons-split-3857.zip",
    //       "path": "data/water-polygons-split-3857.zip"
    //     },
    //     {
    //       "type": "UnzipFile",
    //       "file": "data/water-polygons-split-3857.zip",
    //       "directory": "data"
    //     },
    //     {
    //       "type": "ImportShapefile",
    //       "file": "data/water-polygons-split-3857/water_polygons.shp",
    //       "database": config.database,
    //       "sourceSRID": 3857,
    //       "targetSRID": 3857
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_water_index.sql",
    //       "database": "jdbc:postgresql://localhost:5432/baremaps?&user=baremaps&password=baremaps"
    //     }
    //   ]
    // },
    // {
    //   "id": "simplified-water-polygons",
    //   "needs": [],
    //   "tasks": [
    //     {
    //       "type": "DownloadUrl",
    //       "url": "https://osmdata.openstreetmap.de/download/simplified-water-polygons-split-3857.zip",
    //       "path": "data/simplified-water-polygons-split-3857.zip"
    //     },
    //     {
    //       "type": "UnzipFile",
    //       "file": "data/simplified-water-polygons-split-3857.zip",
    //       "directory": "data"
    //     },
    //     {
    //       "type": "ImportShapefile",
    //       "file": "data/simplified-water-polygons-split-3857/simplified_water_polygons.shp",
    //       "database": config.database,
    //       "sourceSRID": 3857,
    //       "targetSRID": 3857
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_simplified_water_index.sql",
    //       "database": config.database,
    //     },
    //   ]
    // },
    // {
    //   "id": "openstreetmap-data",
    //   "needs": [],
    //   "tasks": [
    //     {
    //       "type": "DownloadUrl",
    //       "url": "https://download.geofabrik.de/europe/switzerland-latest.osm.pbf",
    //       "path": "data/data.osm.pbf"
    //     },
    //     {
    //       "type": "ImportOpenStreetMap",
    //       "file": "data/data.osm.pbf",
    //       "database": config.database,
    //       "databaseSrid": 3857
    //     },
    //   ]
    // },
    // {
    //   "id": "openstreetmap-nodes",
    //   "needs": ["openstreetmap-data"],
    //   "tasks": [
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_nodes_clean.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_nodes_prepare.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_nodes_simplify.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_nodes_index.sql",
    //       "database": config.database,
    //     },
    //   ]
    // },
    // {
    //   "id": "openstreetmap-ways",
    //   "needs": ["openstreetmap-data"],
    //   "tasks": [
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_ways_clean.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_ways_prepare.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_ways_simplify.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_ways_index.sql",
    //       "database": config.database,
    //     },
    //   ]
    // },
    // {
    //   "id": "openstreetmap-relations",
    //   "needs": ["openstreetmap-data"],
    //   "tasks": [
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_relations_clean.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_relations_prepare.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_relations_simplify.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_relations_index.sql",
    //       "database": config.database,
    //     },
    //   ]
    // },
    // {
    //   "id": "openstreetmap-linestring",
    //   "needs": ["openstreetmap-ways"],
    //   "tasks": [
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_linestring.sql",
    //       "database": config.database,
    //     },
    //   ]
    // },
    // {
    //   "id": "openstreetmap-polygon",
    //   "needs": ["openstreetmap-ways", "openstreetmap-relations"],
    //   "tasks": [
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_polygon_prepare.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_polygon_index.sql",
    //       "database": config.database,
    //     },
    //   ]
    // },
    // {
    //   "id": "openstreetmap-boundary",
    //   "needs": ["openstreetmap-linestring"],
    //   "tasks": [
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_boundary_prepare.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_boundary_simplify.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_boundary_index.sql",
    //       "database": config.database,
    //     },
    //   ]
    // },
    // {
    //   "id": "openstreetmap-highway",
    //   "needs": ["openstreetmap-linestring"],
    //   "tasks": [
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_highway_prepare.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_highway_simplify.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_highway_index.sql",
    //       "database": config.database,
    //     },
    //   ]
    // },
    // {
    //   "id": "openstreetmap-railway",
    //   "needs": ["openstreetmap-linestring"],
    //   "tasks": [
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_railway_prepare.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_railway_simplify.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_railway_index.sql",
    //       "database": config.database,
    //     },
    //   ]
    // },
    // {
    //   "id": "openstreetmap-natural",
    //   "needs": ["openstreetmap-polygon"],
    //   "tasks": [
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_natural_prepare.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_natural_simplify.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_natural_index.sql",
    //       "database": config.database,
    //       "parallel": true
    //     },
    //   ]
    // },
    // {
    //   "id": "openstreetmap-landuse",
    //   "needs": ["openstreetmap-polygon"],
    //   "tasks": [
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_landuse_prepare.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_landuse_simplify.sql",
    //       "database": config.database,
    //     },
    //     {
    //       "type": "ExecuteSql",
    //       "file": "queries/osm_landuse_index.sql",
    //       "database": config.database,
    //       "parallel": true
    //     },
    //   ]
    // }
  ]
}
