-- Datos iniciales para todas las bases de datos

-- Para notification_db
INSERT INTO notification_types (name, description, template) VALUES 
('rights_request', 'Solicitud de derechos recibida', 'Tienes una nueva solicitud de derechos para tu canción "{song_title}"'),
('rights_granted', 'Derechos otorgados', 'Te han otorgado los derechos de la canción "{song_title}"'),
('rights_denied', 'Derechos denegados', 'Tu solicitud de derechos para "{song_title}" ha sido denegada'),
('new_message', 'Nuevo mensaje en chat', 'Tienes un nuevo mensaje de {sender_name}'),
('song_uploaded', 'Canción subida exitosamente', 'Tu canción "{song_title}" ha sido subida correctamente');

-- Para song_db  
INSERT INTO genres (name, description) VALUES 
('Pop', 'Música popular'),
('Rock', 'Música rock'),
('Hip Hop', 'Música hip hop y rap'),
('Electronic', 'Música electrónica'),
('Jazz', 'Música jazz'),
('Classical', 'Música clásica'),
('Reggaeton', 'Música reggaeton'),
('Salsa', 'Música salsa'),
('Bachata', 'Música bachata'),
('Merengue', 'Música merengue');

-- Para rights_db
INSERT INTO rights_types (name, description) VALUES 
('master', 'Derechos de grabación master'),
('publishing', 'Derechos de publicación'),
('sync', 'Derechos de sincronización'),
('mechanical', 'Derechos mecánicos'),
('performance', 'Derechos de interpretación');