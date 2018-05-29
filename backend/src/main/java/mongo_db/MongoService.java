package mongo_db;

import mongo_db.DAO.Comment;
import mongo_db.DAO.Marker;
import mongo_db.DAO.Route;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import java.util.ArrayList;
import java.util.List;

import com.mongodb.MongoClient;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.query.UpdateOperations;


public class MongoService
{
    MongoClient client = new MongoClient( "localhost", 27017 ); //connect to mongodb
    Datastore datastore = new Morphia().createDatastore( client, "data_test" );
                    //select shop collection


    public void clear()
    {
        datastore.getCollection( Marker.class ).drop();
        datastore.getCollection( Route.class ).drop();
        datastore.getCollection( Comment.class ).drop();
    }


    public String addMarker( Marker marker )
    {
        datastore.save( marker );
        return marker.getId();
    }


    public String addRoute( Route route )
    {
        datastore.save( route );
        return route.getId();
    }


    public String addComment( Comment comment )
    {
        datastore.save( comment );
        return comment.getId();
    }


    public List<Marker> getAllMarkers()
    {
        List<Marker> list = datastore.find( Marker.class ).asList();
        if( list != null )
        {
            return list;
        }
        return null;
    }


    public List<Route> getAllRoutes()
    {
        List<Route> list = datastore.find( Route.class ).asList();
        if( list != null )
        {
            return list;
        }
        return null;
    }


    public List<Marker> getMarkers( boolean isGetNotOwned, Long userID )
    {
        List<Marker> list = new ArrayList<>();

        if( isGetNotOwned )
        {
            list = datastore.createQuery( Marker.class ).field( "ownerID" ).notEqual( userID )
                            .field( "isPublic" ).equal( Boolean.TRUE ).asList();
        }
        list.addAll( datastore.createQuery( Marker.class ).field( "ownerID" ).equal( userID )
                        .asList() );

        return list;
    }


    public List<Comment> getComments( String targetId )
    {
        return datastore.createQuery( Comment.class ).field( "targetId" ).equal( targetId  )
                        .asList();
    }


    public List<Route> getRoutes( boolean isGetNotOwned, Long userID )
    {
        List<Route> list = new ArrayList<>();

        if( isGetNotOwned )
        {
            list = datastore.createQuery( Route.class ).field( "ownerID" ).notEqual( userID )
                            .field( "isPublic" ).equal( true ).asList();
        }
        list.addAll( datastore.createQuery( Route.class ).field( "ownerID" ).equal( userID )
                        .asList() );

        return list;
    }


    public void changeStatus( String id, Boolean isPublic )
    {
        Query<Marker> query = datastore.createQuery( Marker.class ).field( "_id" )
                        .equal( new ObjectId(id) );
        UpdateOperations<Marker> ops = datastore.createUpdateOperations( Marker.class )
                        .set( "isPublic", isPublic );

        datastore.update( query, ops ).getUpdatedCount();
    }

}
