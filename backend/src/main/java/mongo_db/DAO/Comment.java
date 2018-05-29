/*
 * Copyright (C) 2017 Nokia. All rights reserved.
 */

package mongo_db.DAO;

public class Comment
{
    private String Id;
    private String targetId;
    private String AuthorId;
    private String AuthorName;
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
        return AuthorName;
    }


    public void setAuthorName( String authorName )
    {
        AuthorName = authorName;
    }


    public String getAuthorId()
    {
        return AuthorId;
    }


    public void setAuthorId( String authorId )
    {
        AuthorId = authorId;
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
