import { Container } from "inversify";
import { Bootstrapper } from "./bootstrapper";
import { GlobalTypes, ISample } from "./interfaces";
import "reflect-metadata";

const container = new Container();

Bootstrapper(container);

const sample = container.get<ISample>(GlobalTypes.Sample);
sample.Run({ message: "This a new message" });
