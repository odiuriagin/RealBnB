json.extract! user, :id, :name, :email
if user.photo.attached?
  json.userPhotoUrl url_for(user.photo)
end
