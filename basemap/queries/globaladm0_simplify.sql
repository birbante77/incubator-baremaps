-- Licensed under the Apache License, Version 2.0 (the License); you may not use this file except
-- in compliance with the License. You may obtain a copy of the License at
--
-- http://www.apache.org/licenses/LICENSE-2.0
--
-- Unless required by applicable law or agreed to in writing, software distributed under the License
-- is distributed on an AS IS BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
-- or implied. See the License for the specific language governing permissions and limitations under
-- the License.
CREATE VIEW globaladm0_z20 AS
SELECT fid, shapegroup, shapetype, geom FROM globaladm0;

CREATE VIEW globaladm0_z19 AS
SELECT fid, shapegroup, shapetype, geom FROM globaladm0;

CREATE VIEW globaladm0_z18 AS
SELECT fid, shapegroup, shapetype, geom FROM globaladm0;

CREATE VIEW globaladm0_z17 AS
SELECT fid, shapegroup, shapetype, geom FROM globaladm0;

CREATE VIEW globaladm0_z16 AS
SELECT fid, shapegroup, shapetype, geom FROM globaladm0;

CREATE VIEW globaladm0_z15 AS
SELECT fid, shapegroup, shapetype, geom FROM globaladm0;

CREATE VIEW globaladm0_z14 AS
SELECT fid, shapegroup, shapetype, geom FROM globaladm0;

CREATE VIEW globaladm0_z13 AS
SELECT fid, shapegroup, shapetype, geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z12 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 12)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z11 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 11)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z10 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 10)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z9 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 9)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z8 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 8)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z7 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 7)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z6 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 6)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z5 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 5)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z4 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 4)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z3 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 3)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z2 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 2)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z1 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 1)) AS geom FROM globaladm0;

CREATE MATERIALIZED VIEW globaladm0_z0 AS
SELECT fid, shapegroup, shapetype, st_simplifypreservetopology(geom, 78270 / power(2, 0)) AS geom FROM globaladm0;
