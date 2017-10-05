# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171004170353) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bylaws", force: :cascade do |t|
    t.string "name", null: false
    t.text "attachment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ccr_admins", force: :cascade do |t|
    t.string "name", default: "ccr"
    t.string "display_name", default: "CCRs | ByLaws"
    t.string "route", default: "/ccrs"
    t.string "security", default: "admin"
    t.boolean "active", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ccrs", force: :cascade do |t|
    t.string "name", null: false
    t.text "attachment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.text "content"
    t.string "user_created"
    t.bigint "message_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["message_id"], name: "index_comments_on_message_id"
  end

  create_table "discussion_admins", force: :cascade do |t|
    t.string "name", default: "discussion"
    t.string "display_name", default: "Discussion Forum"
    t.string "route", default: "/discussion"
    t.string "security", default: "admin"
    t.boolean "active", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "emails", force: :cascade do |t|
    t.string "subject", null: false
    t.text "body", null: false
    t.string "recipients"
    t.string "attachments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.string "title", null: false
    t.string "date", null: false
    t.text "description", null: false
    t.boolean "active", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "home_pages", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "legal_admins", force: :cascade do |t|
    t.string "name", default: "legal"
    t.string "display_name", default: "Legal"
    t.string "route", default: "/legal"
    t.string "security", default: "admin"
    t.boolean "active", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "legals", force: :cascade do |t|
    t.string "name"
    t.text "attachment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "user_created"
    t.boolean "archive", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "minutes", force: :cascade do |t|
    t.string "name"
    t.text "attachment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "minutes_admins", force: :cascade do |t|
    t.string "name", default: "minutes"
    t.string "display_name", default: "Meeting Minutes"
    t.string "route", default: "/minutes"
    t.string "security", default: "admin"
    t.boolean "active", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "newsletters", force: :cascade do |t|
    t.string "name", null: false
    t.text "attachment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "newsletters_admins", force: :cascade do |t|
    t.string "name", default: "newsletter"
    t.string "display_name", default: "Newsletters"
    t.string "route", default: "/newsletters"
    t.string "security", default: "admin"
    t.boolean "active", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.boolean "admin", default: false
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "address"
    t.string "number"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  add_foreign_key "comments", "messages"
end
