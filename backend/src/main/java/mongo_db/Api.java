package mongo_db;

import static spark.Spark.*;

import com.google.gson.Gson;

public class Api {

    private static MongoService mongo = new MongoService();
    private static Gson gsonTransformer = new Gson();

    public static void main(String[] args) {

        post("/addSomeData", (req, res) -> {
            mongo.clear();

            Marker marker = new Marker(51.1222822, 17.060590, "marker_test_0", true, "opis_0", true);
            mongo.addMarker(marker);

            marker = new Marker(51.1845689, 51.1845689, "marker_test_1", false, "opis_1", false);
            mongo.addMarker(marker);

            marker = new Marker(51.18415689, 17.0545594, "marker_test_2", false, "opis_2", false);
            mongo.addMarker(marker);

            marker = new Marker(51.18145689, 17.0514594, "marker_test_3", true, "opis_3", false);
            mongo.addMarker(marker);

            marker = new Marker(51.18172689, 17.0514524, "marker_test_", true, "opis_4", false);
            mongo.addMarker(marker);

            Coordinates[] temp = {new Coordinates(51.18112689, 17.0511524), new Coordinates(51.18472689, 17.0714524)};
            Route route = new Route(temp, "trasa_test_0", true, "opis_0", false);
            mongo.addRoute(route);

            Coordinates[] temp1 = {new Coordinates(51.14112689, 17.0141524), new Coordinates(51.18485689, 17.0772524)};
            route = new Route(temp1, "trasa_test_1", true, "opis_1", false);
            mongo.addRoute(route);

            return "example data added";
        }, gsonTransformer::toJson);

        post("/addMarker", (req, res) -> {
            res.type("application/json");
            Marker marker = gsonTransformer.fromJson(req.body(), Marker.class);
            return mongo.addMarker(marker);
        }, gsonTransformer::toJson);

        post("/addRoute", (req, res) -> {
            res.type("application/json");
            Route route = gsonTransformer.fromJson(req.body(), Route.class);
            return mongo.addRoute(route);
        }, gsonTransformer::toJson);

        get("/getAllMarkers", (req, res) -> {
            res.type("application/json");
            return mongo.getAllMarkers();
        }, gsonTransformer::toJson);

        get("/getAllRoutes", (req, res) -> {
            res.type("application/json");
            return mongo.getAllRoutes();
        }, gsonTransformer::toJson);

        get("/getMarkers", (req, res) -> {
            String owned = req.queryParams("owned");
            res.type("application/json");
            return mongo.getMarkers(Boolean.valueOf(owned));
        }, gsonTransformer::toJson);

        get("/getRoutes", (req, res) -> {
            String owned = req.queryParams("owned");
            res.type("application/json");
            return mongo.getRoutes(Boolean.valueOf(owned));
        }, gsonTransformer::toJson);

        put("/changeStatus", (req, res) -> {
            Boolean isPublic = Boolean.valueOf(req.queryParams("isPublic"));
            mongo.changeStatus((req.body().toString()), isPublic);
            return "";
        }, gsonTransformer::toJson);
    }
}
