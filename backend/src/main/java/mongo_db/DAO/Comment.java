/*
 * Copyright (C) 2017 Nokia. All rights reserved.
 */

package mongo_db.DAO;

public class Comment
{
    private String Id;
    private String targetId;
    private String authorName;
    private String content;

    public Comment(){}

    public String getContent()
    {
        return content;
    }


    public void setContent( String content )
    {
        this.content = content;
    }


    public String getAuthorName()
    {
        return authorName;
    }


    public void setAuthorName( String authorName )
    {
        this.authorName = authorName;
    }


    public String getTargetId()
    {
        return targetId;
    }


    public void setTargetId( String targetId )
    {
        this.targetId = targetId;
    }


    public String getId()
    {
        return Id;
    }


    public void setId( String id )
    {
        Id = id;
    }
}
