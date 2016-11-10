package com.smartjournal.enums;

/**
 * Created by karpukdm on 11/10/16.
 */
public enum AccessType {
    PUBLIC {
        @Override
        public String toString() {
            return "public";
        }
    },
    PRIVATE {
        @Override
        public String toString() {
            return "private";
        }
    };

    public abstract String toString();
}
