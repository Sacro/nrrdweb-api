import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);

	app.setGlobalPrefix('api')

	const options = new DocumentBuilder()
		.setBasePath('api')
		.setTitle('NRRD Api')
		.setDescription('Network Rail Reference Data API')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/docs', app, document);

	await app.listen(3000);
}
bootstrap();
