import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          {/* <AvatarImage src="/avatars/01.png" alt="Avatar" /> */}
          <AvatarFallback>HM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Habiba Mahmoud</p>
          <p className="text-sm text-muted-foreground">
            habiba.mahmoud@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+£1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          {/* <AvatarImage src="/avatars/02.png" alt="Avatar" /> */}
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Omar Mohammed</p>
          <p className="text-sm text-muted-foreground">
            omar.Mohammed@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+£39.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          {/* <AvatarImage src="/avatars/03.png" alt="Avatar" /> */}
          <AvatarFallback>SK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sarah Khaled</p>
          <p className="text-sm text-muted-foreground">
            sarah.khaled@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+£299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          {/* <AvatarImage src="/avatars/04.png" alt="Avatar" /> */}
          <AvatarFallback>YA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Youssef Ahmed</p>
          <p className="text-sm text-muted-foreground">
            youssefahmed@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+£99.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          {/* <AvatarImage src="/avatars/05.png" alt="Avatar" /> */}
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Salma Amir</p>
          <p className="text-sm text-muted-foreground">salma.amir@email.com</p>
        </div>
        <div className="ml-auto font-medium">+£39.00</div>
      </div>
    </div>
  );
}
