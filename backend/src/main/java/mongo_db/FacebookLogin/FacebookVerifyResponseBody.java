/*
 * Copyright (C) 2017 Nokia. All rights reserved.
 */

package mongo_db.FacebookLogin;

public class FacebookVerifyResponseBody {
    private FacebookVerifyResponseBodyData data;

    public FacebookVerifyResponseBody() {
    }

    ;

    public FacebookVerifyResponseBodyData getData() {
        return data;
    }

    public void setData(FacebookVerifyResponseBodyData data) {
        this.data = data;
    }

    public boolean isValid() {
        return data.isIs_valid();
    }
}
