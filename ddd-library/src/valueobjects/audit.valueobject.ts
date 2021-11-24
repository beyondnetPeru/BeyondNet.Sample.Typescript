import { ValueObject } from '../valueobjects';

export interface IAuditProps {
  CreatedOn: Date;
  CreatedBy: string;
  UpdatedOn?: Date | null;
  UpdatedBy?: string;
  Timestamp: number;
}

export class Audit extends ValueObject<IAuditProps> {
  private _CreatedOn: Date;
  public get CreatedOn(): Date {
    return this._CreatedOn;
  }

  private _CreatedBy: string;
  public get CreatedBy(): string {
    return this._CreatedBy;
  }

  private _UpdatedOn!: Date;
  public get UpdatedOn(): Date {
    return this._UpdatedOn;
  }

  private _UpdatedBy: string | undefined;
  public get UpdatedBy(): string {
    return this._UpdatedBy || '';
  }

  private _TimeStamp: number;
  public get TimeStamp(): number {
    return this._TimeStamp;
  }

  private constructor(props: IAuditProps) {
    super(props);

    this._CreatedOn = props.CreatedOn;
    this._CreatedBy = props.CreatedBy;
    this._TimeStamp = props.Timestamp;
  }

  public static Create(createdBy: string): Audit {
    const props: IAuditProps = {
      CreatedOn: new Date(),
      CreatedBy: createdBy,
      Timestamp: +new Date(),
    };

    return new Audit({ ...props });
  }

  public static Update(audit: Audit, updatedBy: string): Audit {
    audit._UpdatedBy = updatedBy;
    audit._UpdatedOn = new Date();
    audit._TimeStamp = +new Date();

    return audit;
  }
}
