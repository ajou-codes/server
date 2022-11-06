import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '1234', // TODO: 나중 ㅋㅋ
    });
  }

  async validate({ userId }: { userId: number }) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  }
}
