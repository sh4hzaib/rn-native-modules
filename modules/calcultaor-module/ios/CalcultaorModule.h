
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNCalcultaorModuleSpec.h"

@interface CalcultaorModule : NSObject <NativeCalcultaorModuleSpec>
#else
#import <React/RCTBridgeModule.h>

@interface CalcultaorModule : NSObject <RCTBridgeModule>
#endif

@end
