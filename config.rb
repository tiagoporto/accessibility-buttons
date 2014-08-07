=begin
	My template gulp.js
	Version: 1.0.2
	Author: Tiago Porto - http://www.tiagoporto.com
	https://github.com/tiagoporto
	Contact: me@tiagoporto.com
=end

http_path = "/";
http_images_path = "../img";
http_generated_images_path = "../img";
http_fonts_path = "../fonts";

module Compass::SassExtensions::Functions::Sprites
  def sprite_url(map)
    verify_map(map, "sprite-url")
    map.generate
    generated_image_url(Sass::Script::String.new(map.name_and_hash))
  end
end

module Compass::SassExtensions::Sprites::SpriteMethods
  def name_and_hash
    "sprite-#{path}.png"
  end

  def cleanup_old_sprites
    Dir[File.join(::Compass.configuration.generated_images_path, "sprite-#{path}.png")].each do |file|
      log :remove, file
      FileUtils.rm file
      ::Compass.configuration.run_sprite_removed(file)
    end
  end
end

module Compass
  class << SpriteImporter
    def find_all_sprite_map_files(path)
      glob = "sprite-*{#{self::VALID_EXTENSIONS.join(",")}}"
      Dir.glob(File.join(path, "**", glob))
    end
  end
end